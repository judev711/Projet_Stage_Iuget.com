import express from "express";
import cors from "cors";
import "dotenv/config";

import Register_userRoutes from "./routes/Register_user.js"; // Routes pour l'inscription
import Conges_users from "./routes/Conges_users.js"; // Routes pour les congés
import RecupConges_users from "./routes/RecupConges_user.js"

import { clerkMiddleware, requireAuth } from "@clerk/express"; // Middleware Clerk

const app = express(); // ✅ Utilisation de "app" au lieu de "App"

// ✅ Middleware : ordre correct
app.use(cors()); // Autorise les requêtes cross-origin
app.use(express.json()); // ✅ Doit être avant Clerk pour parser correctement les requêtes
app.use(clerkMiddleware()); // Clerk Middleware

// ✅ Définition des routes
app.use("/Register", Register_userRoutes);
app.use("/postC", Conges_users);
app.use("/Recuperation", RecupConges_users)

// ✅ Exemple d'une route protégée avec Clerk
app.get("/protected", requireAuth(), (req, res) => {
  res.send("Ceci est une route protégée.");
});

// ✅ Lancement du serveur sur le port 5000

app.listen(5000, () => {
  console.log(`✅ Serveur démarré sur le port `);
});
