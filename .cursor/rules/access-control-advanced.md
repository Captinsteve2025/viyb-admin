---
title: Access Control - Advanced Patterns
description: Context-aware, time-based, subscription-based access, factory functions, templates
tags: [payload, access-control, security, advanced, performance]
priority: high
---

# Advanced Access Control Patterns

Advanced access control patterns including context-aware access, time-based restrictions, factory functions, and production templates.

## Context-Aware Access Patterns

### Locale-Specific Access

```typescript
import type { Access } from 'payload'

export const localeSpecificAccess: Access = ({ req: { user, locale } }) => {
  // Authenticated users can access all locales
  if (user) return true

  // Public users can only access English content
  if (locale === 'en') return true

  return false
}
```
