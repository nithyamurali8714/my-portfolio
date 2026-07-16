# Nithya Murali — Personal Portfolio (MERN Stack)

Full-stack portfolio website:
- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- **Database:** MongoDB (Atlas)
- **Deploy:** Frontend → Vercel/Netlify · Backend → Render

## Folder structure
```
portfolio/
├── backend/     Express API + MongoDB models
└── frontend/    React app (Vite)
```

## 1. Set up MongoDB Atlas (free)
1. Go to mongodb.com/cloud/atlas, create a free cluster.
2. Create a database user (username + password).
3. Network Access → Allow access from anywhere (0.0.0.0/0) for now.
4. Get your connection string, it looks like:
   `mongodb+srv://<user>:<password>@cluster0.mongodb.net/portfolioDB`

## 2. Run the backend locally
```bash
cd backend
npm install
cp .env.example .env
# edit .env and paste your MongoDB connection string
npm run dev
```
Backend runs at `http://localhost:5000`. Test it: open that URL, you should see "Portfolio API is running".

## 3. Seed a project (optional — the site has fallback content if you skip this)
Use Postman or curl to POST to `http://localhost:5000/api/projects`:
```json
{
  "title": "EventPro — Event Management System",
  "description": "Full MERN stack event management platform.",
  "techStack": ["React", "Node.js", "Express", "MongoDB"],
  "githubLink": "https://github.com/your-username/eventpro",
  "liveLink": ""
}
```

## 4. Run the frontend locally
```bash
cd frontend
npm install
cp .env.example .env
# VITE_API_URL=http://localhost:5000
npm run dev
```
Opens at `http://localhost:5173`.

## 5. Deploy the backend (Render)
1. Push the `backend/` folder to a GitHub repo.
2. render.com → New → Web Service → connect the repo.
3. Build command: `npm install` · Start command: `npm start`
4. Add environment variable `MONGO_URI` with your Atlas connection string.
5. Deploy. You'll get a URL like `https://your-backend.onrender.com`.

## 6. Deploy the frontend (Vercel or Netlify)
1. Push `frontend/` to GitHub (can be the same repo, different folder).
2. Vercel → New Project → import repo → set root directory to `frontend`.
3. Add environment variable `VITE_API_URL` = your Render backend URL.
4. Deploy. Done — you'll get a live link to submit.

## Notes
- The Projects section works even with an empty database (shows fallback project cards), so the site never looks broken while you're still setting up the DB.
- The Contact form saves messages to MongoDB via `/api/messages` — check submissions by hitting that same endpoint with GET, or connect MongoDB Compass to view the `messages` collection directly.
- Edit `frontend/src/components/Experience.jsx` and `Projects.jsx` to update your real project links once they're live.
