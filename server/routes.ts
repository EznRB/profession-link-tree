import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for profile data
  app.get("/api/profiles/:type", (req, res) => {
    const profileType = req.params.type;
    
    switch(profileType) {
      case "barber":
      case "mechanic":
      case "nutritionist":
        res.json({ success: true, profileType });
        break;
      default:
        res.status(404).json({ success: false, message: "Profile type not found" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
