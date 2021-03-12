# Pull imagen base
FROM postgres:alpine

# Variables de entorno necesarias
ENV CONTACT_DB_USER=contact
ENV CONTACT_DB_PASSWORD=CONTACT2021
ENV CONTACT_DB_DATABASE=contactos
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=CONTACT2021

# Agregar script inicial
ADD init /docker-entrypoint-initdb.d/