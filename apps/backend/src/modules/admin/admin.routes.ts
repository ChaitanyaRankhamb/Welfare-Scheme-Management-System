import { Router } from 'express';
import { adminController } from './admin.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { authorizeRoles } from '../../middlewares/rbac.middleware';
import { Role } from '../../types/roles.enum';

const router = Router();

// Apply authentication and ADMIN role requirement to ALL routes here
router.use(authMiddleware, authorizeRoles(Role.ADMIN));

// Schemes Management
router.post('/schemes', adminController.createScheme);
router.put('/schemes/:id', adminController.updateScheme);
router.delete('/schemes/:id', adminController.deleteScheme);

// Applications Management
router.get('/applications', adminController.getApplications);
router.patch('/applications/:id/status', adminController.updateApplicationStatus);

// User Management
router.get('/users', adminController.getUsers);

export default router;
