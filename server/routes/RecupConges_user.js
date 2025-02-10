import express from "express";
import cors from "cors";
import pool from "../db.js"; // Connexion MySQL (assurez-vous qu'elle est bien configurée)
import { requireAuth } from "@clerk/express"; // Middleware Clerk

const router = express.Router();

router.use(cors());

router.get("/conges", requireAuth(), async (req, res) => {
  try {
    // 🔹 Récupérer le Clerk ID de l'utilisateur connecté
    const clerkId = req.auth.userId;

    // 🔹 Vérifier si l'utilisateur existe dans la base de données
    const sqlUser = "SELECT id_user FROM Utilisateur WHERE clerkId = ?";
    const [rows] = await pool.query(sqlUser, [clerkId]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    const id_user = rows[0].id_user; // ✅ ID de l'utilisateur trouvé

    // 🔹 Récupérer ses demandes de congés
    const sqlConges = "SELECT * FROM conge WHERE id_user = ?";
    const [conges] = await pool.query(sqlConges, [id_user]);
    console.log("conge:", conges)
    res.json(conges);
  } catch (error) {
    console.error("❌ Erreur serveur :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});
export default router;