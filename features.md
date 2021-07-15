### Definir MVP	
- Clientes(customers)
- Usuários(users)
- Beneficiario(recipients)
- Contas(accounts)
- Conta Acessos (account_tokens)
- Bancos(banks)
- Boletos Lote(bank_slip_batch)
- Boletos(bank_slip)
- Boletos Status(bank_slip_status)
	
### Definir Linguagem Principal
-[X] Frontend( Sugestão: React)
-[X] Backend( Sugestão: Node/Serverless)
- Usar Typescript
	-[X] Backend
	-[X] Frontend
	
### Configurar projeto
- Configurar AWS profiles
-[X] Criar conta repository(monorepo inicialmente)
- Configurar CloudFront para Frontend
- Configurar local
	- Ambiente offline	  	
		-[X] API (serverless-offline)
		- S3 (serverless-s3-local)
		- SQS (serverless-offline-sqs)
		- DYNAMONDB (serverless-dynamodb-local)
- [X] Definir STAGES(prod, dev, staging...)
- Configurar CD/CD