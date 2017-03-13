## Noodent project setup

####git clone noodent repository

####create folder - vendor

####run - composer update

####cd /public/admin

####run - npm install

####run - bower install

####create .env file if not exists and add entries listed below:

```
APP_ENV=local
APP_DEBUG=true
APP_KEY=12345678901234567890123456789012

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_TIMEZONE=UTC

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=port
DB_DATABASE=XYZ
DB_USERNAME=XYZ
DB_PASSWORD=XYZ

CACHE_DRIVER=file
QUEUE_DRIVER=sync

JWT_SECRET=aaaabbbbccccddddeeeeffffgggghhhh

API_STANDARDS_TREE=vnd
API_SUBTYPE=abs
API_NAME="Abs"
API_PREFIX=api
API_VERSION=v1
API_DEBUG=true
API_STRICT=false
```
