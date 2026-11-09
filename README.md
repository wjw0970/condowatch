# CondoWatch

A financial transparency portal for condominium owners in Singapore.

## Overview

CondoWatch helps condominium owners understand how their
Management Corporation Strata Title (MCST) collects, manages,
and spends maintenance contributions.

The goal is to make condominium financial information
accessible, understandable, and traceable.

## Core Objectives

- Provide transparent financial reporting for owners.
- Track income and expenditure.
- Show spending by category and vendor.
- Provide access to available payment details.
- Support financial report imports.
- Maintain traceability to source documents.
- Protect personal and confidential information.

## Technology Stack

| Component | Technology |
|-----------|------------|
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Backend | Python, FastAPI |
| Database | PostgreSQL 17 |
| Containerization | Docker Compose |
| Version Control | Git, GitHub |
| API Documentation | OpenAPI / Swagger |

## Architecture

```text
Owner Browser
     |
     v
Next.js Frontend
     |
     v
FastAPI Backend
     |
     v
PostgreSQL Database

Future Data Import:

CSV / Excel Reports
     |
     v
Validation & Mapping
     |
     v
PostgreSQL
     |
     v
Financial Dashboard





