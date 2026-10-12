
create or replace function js_premium(p_guru uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce((select coalesce(premium_rendah_tamat, '-infinity') > now() or coalesce(premium_atas_tamat, '-infinity') > now()
                   from js_guru where id = p_guru), false)
$$;
create or replace function js_murid_maks(p_kelas text)
returns int language sql stable security definer set search_path = public as $$
  select case when js_premium((select guru from js_kelas where id = p_kelas)) then 60 else 40 end
$$;
create or replace function js_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
declare g js_guru%rowtype; sendiri int; had int;
begin
  
  select * into g from js_guru where id = new.guru;
  select count(*) into sendiri from js_kelas where guru = new.guru;
  had := (case when js_premium(new.guru) then 5 else 2 end) + 5 * coalesce(g.paket_kelas, 0);
  if sendiri < had then return new; end if;
  raise exception 'had kelas bagi setiap guru';
end $$;
create or replace function js_had_murid()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from js_murid where kelas = new.kelas) >= js_murid_maks(new.kelas) then
    raise exception 'had murid bagi setiap kelas';
  end if;
  return new;
end $$;
revoke all on function js_premium(uuid), js_murid_maks(text) from public, anon, authenticated;

CREATE OR REPLACE FUNCTION public.js_guru_simpan_murid(p_kelas text, p_murid jsonb)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if not js_milik(p_kelas) then raise exception 'bukan kelas anda'; end if;
  if jsonb_array_length(coalesce(p_murid, '[]'::jsonb)) > js_murid_maks(p_kelas) then
    raise exception 'had murid bagi setiap kelas';
  end if;
  delete from js_murid where kelas = p_kelas;
  insert into js_murid(kelas, no, nama, pin)
    select p_kelas, x->>'no', x->>'nama', x->>'pin'
    from jsonb_array_elements(coalesce(p_murid, '[]'::jsonb)) x;
  delete from js_gagal where kelas = p_kelas;
  return true;
end $function$
;
