# Abdelrahman Ehssan — Portfolio website (v3)

**Live site to update:** https://abdelrahman-ehssan-website.vercel.app/

Static HTML/CSS/JavaScript. No npm packages or build step required for the site itself.

## Files
- `index.html`: site content, links, case studies and metadata
- `css/styles.css`: colors, typography and layout
- `js/main.js`: mobile menu, filters, progress and footer year
- `assets/Abdelrahman_Ehssan_Resume.pdf`: public resume downloadable from navigation, hero and contact sections
- `assets/`: favicon and social image

## Preview locally
Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and open http://localhost:8000.

## Update your existing Vercel website (not a new URL!)
**If your Vercel project is linked to GitHub:** Go to Vercel > your project > Settings > Git to see its connected repo. Replace the existing website source files there with the **contents of this folder**. Do not upload the containing `website/` directory if your existing project expects `index.html` in the root. Commit; Vercel should deploy the configured production branch.

**If your site was deployed without a Git repo:** From this folder, run `npm install -g vercel`, then `vercel login`, then `vercel link`. When prompted, select **your existing** `abdelrahman-ehssan-website` project (not a newly created project). Then use `vercel deploy --prod`. Confirm in the Vercel dashboard that the production domain points to the new deployment. See: https://vercel.com/docs/projects/deploy-from-cli.

**Do not** create a new Vercel project or send the website ZIP to Drop unless you intentionally want a second URL.

## Notes
- Professional title is now **Applied AI Engineer**, no intern/student branding.
- LearNova is the display name; the existing repository URL `learnova_scoring_service` is unchanged.
- Industry experience appears without employer name; source code isn't implied to be open source.
- The Text-to-SQL case study is based on the resume. It has no invented repo or live link.
- Resume links should resolve at `/assets/Abdelrahman_Ehssan_Resume.pdf` after deployment.
- Your PDF includes public email/phone data. Publish it only if you want both visible to visitors.
