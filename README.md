# Site oficial The Lashes Universe

## Instalação

```bash
yarn install
```


## Rodar localmente

```bash
yarn dev
```

## Deploy

Qualquer push no branch main do projeto automaticamente fará deploy para o S3 [XXX](https://s3.console.aws.amazon.com/s3/buckets/XXX?region=sa-east-1&tab=objects)
e limpará o cache do cloudfront [XXX](https://us-east-1.console.aws.amazon.com/cloudfront/v3/home?region=sa-east-1#/distributions/XXX)

O processo completo envolve rodar build do next, depois export, e subir a pasta gerada para a AWS e pode ser alterado no arquivo 
[.github/workflows/aws-production.yml](.github/workflows/aws-production.yml)
