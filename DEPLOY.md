# Deploy SEPL Website to Firebase Hosting (Google)

Account: **vt.admin@vichakshan.work**

## One-time setup

### 1. Login to Firebase (use your Google account)

```bash
cd "c:\Users\tejas\Desktop\Vichakshan ERP\Websites\Suvidhinath Electronics Pvt. Ltd"
npx firebase login
```

Sign in with **vt.admin@vichakshan.work** when the browser opens.

### 2. Create Firebase project (if not exists)

1. Open [Firebase Console](https://console.firebase.google.com/)
2. Sign in as **vt.admin@vichakshan.work**
3. Click **Add project**
4. Project name: `SEPL Website`
5. Project ID: `sepl-vichakshan` (or note your ID)
6. Enable **Firebase Hosting**

If you use a different project ID, update `.firebaserc`:

```json
{
  "projects": {
    "default": "YOUR-PROJECT-ID"
  }
}
```

## Deploy to live site

```bash
npm run deploy
```

Your site will be live at:
- `https://sepl-vichakshan.web.app`
- `https://sepl-vichakshan.firebaseapp.com`

## Deploy test / preview (30 days)

```bash
npm run deploy:preview
```

This creates a temporary preview URL like:
`https://sepl-vichakshan--preview-xxxxx.web.app`

## Custom domain (optional)

In Firebase Console → Hosting → Add custom domain → `seplweb.in`

---

## Troubleshooting

**Build errors:** Run `npm run clean` then `npm run build`

**500 on local dev:** Run `npm run dev:clean`

**Auth error:** Run `npx firebase login` again with vt.admin@vichakshan.work
