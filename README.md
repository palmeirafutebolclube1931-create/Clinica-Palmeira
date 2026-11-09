# Portal Clínica Palmeira — estrutura profissional

Aplicação React + Vite preparada para Supabase (Auth + PostgreSQL). Esta é uma base de projeto, não uma implantação hospedada.

## Requisitos
- Node.js 20+
- Projeto Supabase
- Conta de hospedagem (ex.: Vercel/Netlify)

## Rodar localmente
1. `npm install`
2. Copie `.env.example` para `.env` e configure URL/chave pública do Supabase.
3. `npm run dev`

## Segurança antes de publicar
- Execute `supabase/schema.sql` no SQL Editor do Supabase.
- Crie usuário administrativo pelo Supabase Auth e atribua perfil `admin` em `profiles`.
- Configure políticas RLS e revise-as com profissional técnico antes de inserir dados reais.
- Não coloque service_role key no navegador.
- Configure política de privacidade, consentimento de responsável para menores e retenção de dados.
- Pix: integrar provedor/PSP e webhook autenticado; não considerar comprovante enviado como pagamento confirmado.
- Certificados: emitir apenas após validar pagamento e presença.

## O que está incluído
- Página pública e formulário de inscrição.
- Login administrativo.
- Dashboard/lista de inscrições, status Pix e check-in.
- Exportação CSV.
- Esqueleto de gestão de camisas e certificados.
