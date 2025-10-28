# Vercel secret setup (repository)

Follow these exact steps to add the required GitHub Actions secrets so the Vercel deploy workflow can run.

1) Create a Vercel Personal Token
- In Vercel: Account → Settings → Tokens → Create Token
- Copy the token value (you will not be able to view it again).

2) (Optional, recommended) Get Org & Project IDs (for deterministic deploys)
- In Vercel dashboard, open the project → Settings → General → Project ID
- In Vercel dashboard, open account/org settings → Overview → scroll for Org ID

3) Add secrets to this GitHub repo using gh (recommended)
- Run these commands from your local clone (replace placeholder values):

```bash
# Required
gh secret set VERCEL_TOKEN --body "YOUR_VERCEL_TOKEN" --repo stancsz/prompt-engineering-learning-hub

# Optional (useful for deterministic deploys)
gh secret set VERCEL_ORG_ID --body "YOUR_VERCEL_ORG_ID" --repo stancsz/prompt-engineering-learning-hub
gh secret set VERCEL_PROJECT_ID --body "YOUR_VERCEL_PROJECT_ID" --repo stancsz/prompt-engineering-learning-hub
```

4) Alternative: Add secrets via GitHub UI
- Repository → Settings → Secrets and variables → Actions → New repository secret
  - Name: VERCEL_TOKEN, Value: (token)
  - Optionally add VERCEL_ORG_ID and VERCEL_PROJECT_ID

5) Trigger the deploy workflow
- After adding secrets, trigger the workflow by pushing an empty commit:

```bash
git commit --allow-empty -m "ci: trigger Vercel deploy" && git push origin main
```

6) Follow-up
- After the workflow run starts, check Actions → "Deploy to Vercel" for logs.
- If the run fails, copy the error lines and provide them; the workflow will be re-run and I will analyze logs and iterate until successful.

Notes
- Do NOT paste your token publicly. Use the gh secret command or GitHub UI to store it securely.
- If you prefer, create a limited-scope token in Vercel (only deployments) rather than a full account token.
