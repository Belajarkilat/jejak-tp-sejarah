-- 12 Okt 2026: benarkan ping 'lawat' daripada landing.html (sumber.js), seperti lo_ping Sains.
-- Sudah dijalankan pada projek noaeagitwklnpmyhhhtn.
alter table js_ping drop constraint js_ping_jenis_check;
alter table js_ping add constraint js_ping_jenis_check check (jenis in ('buka','hentian','ralat','lawat'));

create or replace function public.js_ping(p_jenis text, p_peranti text, p_bab text default null, p_aras integer default null, p_nota text default '')
returns void language plpgsql security definer set search_path to 'public' as $f$
begin
  if p_jenis not in ('buka','hentian','ralat','lawat') then return; end if;
  if p_peranti !~ '^[a-z0-9]{8}$' then return; end if;
  if p_bab is not null and p_bab !~ '^s[1-5]b[0-9]{1,2}$' then return; end if;
  if (select count(*) from js_ping
      where peranti = p_peranti and masa > now() - interval '1 day') >= 300 then
    return;
  end if;
  insert into js_ping (jenis, bab, aras, peranti, nota)
  values (p_jenis, p_bab,
          case when p_aras between 1 and 6 then p_aras end,
          p_peranti, left(coalesce(p_nota,''), 300));
end $f$;
