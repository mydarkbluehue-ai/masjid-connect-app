# Masjid Connect TV App

This project is a responsive web application designed to serve as a digital display for Masjids, showing prayer times and rotating slides (advertisements and announcements). It features two selectable layouts optimized for TV screens.

## Project Overview

The application is built with React and Tailwind CSS, utilizing shadcn/ui components for a modern and accessible user interface.

**Key Features (Frontend Implemented):**

*   **Two Display Layouts:**
    *   **Layout 1 (Split Half Screen):** Prayer times on the left 50%, rotating slides on the right 50%.
    *   **Layout 2 (Bottom Prayer Bar):** Prayer times in the bottom 25%, rotating slides in the upper 75%.
*   **Rotating Slides:** Supports image, text, announcement, and advertisement slides with smooth transitions.
*   **Prayer Times Display:** Shows Fajr, Dhuhr, Asr, Maghrib, Isha times with Waqt (start) and Iqamah (congregation) times.
*   **TV Screen Optimization:** Designed with large, readable fonts and clean layouts suitable for 1920x1080 landscape displays.
*   **Layout Switcher:** A client-side toggle for demonstration purposes to switch between layouts.

**Conceptual Backend Features (Not Implemented in this codebase):**

The full vision for this app includes a robust backend to manage content, users, and settings.

*   **User Roles:**
    *   **Masjid Admin:** Manages masjid details, prayer times, slides, layouts, and ad requests for their specific masjid.
    *   **Advertiser:** Registers, logs in, searches for masjids, uploads ad content, and views ad request status.
    *   **Super Admin:** Full control over all users, accounts, logs, analytics, and global settings.
*   **Content Management:**
    *   CRUD operations for prayer times, announcements, and advertisements.
    *   File uploads for images, GIFs, and videos.
    *   Ability to set rotation intervals for slides.
*   **Ad Approval Workflow:** Admins can accept or reject ad requests, with payment redirection for accepted ads.
*   **Real-time Updates:** Prayer times and slides would auto-refresh when changed in the backend.
*   **Authentication:** Role-based authentication (e.g., JWT or Firebase Auth).
*   **Analytics & Logging:** For Super Admins to monitor app usage and ad performance.

## Frontend Folder Structure

```
src/
├── App.tsx                     # Main application component, handles routing
├── main.tsx                    # Entry point for React app
├── globals.css                 # Global Tailwind CSS styles
├── lib/
│   └── utils.ts                # Utility functions (e.g., cn for Tailwind)
├── hooks/
│   └── use-mobile.tsx          # Hook for mobile detection
├── components/
│   ├── ui/                     # shadcn/ui components (pre-installed)
│   ├── made-with-dyad.tsx      # Dyad attribution
│   ├── LayoutSwitcher.tsx      # Component to switch between display layouts
│   ├── PrayerTimesDisplay.tsx  # Displays prayer times (reusable)
│   ├── slides/
│   │   ├── SlideRenderer.tsx   # Renders individual slide types
│   │   └── SlideShow.tsx       # Manages rotating slides
│   └── layouts/
│       ├── Layout1Split.tsx    # Split Half Screen layout
│       └── Layout2BottomBar.tsx# Bottom Prayer Bar layout
├── pages/
│   ├── MasjidConnectTV.tsx     # The main TV display page
│   ├── AdminDashboard.tsx      # Placeholder for the Admin Dashboard
│   └── NotFound.tsx            # 404 Not Found page
└── utils/
    └── toast.ts                # Utility for toast notifications
```

## Conceptual Backend Architecture

### Suggested Folder Structure (Example for Node.js/Express)

```
backend/
├── src/
│   ├── config/                 # Database, auth, and other configurations
│   ├── models/                 # Database models (User, Masjid, Slide, etc.)
│   ├── controllers/            # Logic for handling API requests
│   ├── routes/                 # API route definitions
│   ├── middleware/             # Authentication, authorization, error handling
│   ├── services/               # Business logic, external API integrations (e.g., GTM)
│   └── app.ts                  # Express app setup
├── .env.example                # Environment variables
├── package.json                # Backend dependencies
└── tsconfig.json               # TypeScript configuration
```

### Backend Models (Conceptual)

1.  **User**
    *   `id` (PK)
    *   `email` (Unique)
    *   `passwordHash`
    *   `role` (Enum: 'super_admin', 'masjid_admin', 'advertiser')
    *   `masjidId` (FK to Masjid, nullable for Super Admin/Advertiser)
    *   `name`
    *   `organization` (for Advertisers)
    *   `status` (e.g., 'active', 'suspended')
    *   `createdAt`, `updatedAt`

2.  **Masjid**
    *   `id` (PK)
    *   `name`
    *   `address`
    *   `city`, `country`
    *   `gmtTimezone` (e.g., 'GMT+0', 'GMT-5')
    *   `adminId` (FK to User, the Masjid Admin)
    *   `selectedLayout` (Enum: 'layout1', 'layout2')
    *   `slideRotationInterval` (in seconds)
    *   `paymentLink` (for advertisers)
    *   `createdAt`, `updatedAt`

3.  **PrayerTime**
    *   `id` (PK)
    *   `masjidId` (FK to Masjid)
    *   `name` (Enum: 'Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha')
    *   `waqt` (Time string, e.g., '05:30 AM')
    *   `iqamah` (Time string, e.g., '05:45 AM')
    *   `date` (Date, for daily updates or schedules)
    *   `createdAt`, `updatedAt`

4.  **Slide**
    *   `id` (PK)
    *   `masjidId` (FK to Masjid)
    *   `type` (Enum: 'image', 'text', 'video', 'announcement', 'advertisement')
    *   `title`
    *   `content` (for text/announcement)
    *   `mediaUrl` (URL to image/video in storage)
    *   `link` (for advertisements)
    *   `duration` (individual slide rotation time, overrides global if set)
    *   `isActive`
    *   `isApproved` (for advertiser ads)
    *   `createdBy` (FK to User)
    *   `createdAt`, `updatedAt`

5.  **AdRequest**
    *   `id` (PK)
    *   `advertiserId` (FK to User)
    *   `masjidId` (FK to Masjid)
    *   `slideId` (FK to Slide, once created)
    *   `status` (Enum: 'pending', 'accepted', 'rejected')
    *   `rejectionReason` (nullable)
    *   `requestedDuration` (e.g., 1 month, 3 months)
    *   `createdAt`, `updatedAt`

### API Routes (Conceptual Examples)

**Authentication:**
*   `POST /api/auth/register`
*   `POST /api/auth/login`
*   `POST /api/auth/logout`
*   `GET /api/auth/me` (Get current user profile)

**Masjid Admin (requires `masjid_admin` role):**
*   `GET /api/masjid/:id` (Get masjid details)
*   `PUT /api/masjid/:id` (Update masjid details)
*   `GET /api/masjid/:id/prayer-times`
*   `POST /api/masjid/:id/prayer-times`
*   `PUT /api/masjid/:id/prayer-times/:prayerId`
*   `GET /api/masjid/:id/slides`
*   `POST /api/masjid/:id/slides` (Upload new slide)
*   `PUT /api/masjid/:id/slides/:slideId`
*   `DELETE /api/masjid/:id/slides/:slideId`
*   `GET /api/masjid/:id/ad-requests`
*   `PUT /api/masjid/:id/ad-requests/:requestId/approve`
*   `PUT /api/masjid/:id/ad-requests/:requestId/reject`

**Advertiser (requires `advertiser` role):**
*   `GET /api/masjids` (Search masjids)
*   `POST /api/ad-requests` (Submit new ad request with media upload)
*   `GET /api/ad-requests/my` (View own ad requests)

**Super Admin (requires `super_admin` role):**
*   `GET /api/users` (Manage all users)
*   `PUT /api/users/:id/status` (Approve/suspend user accounts)
*   `GET /api/logs`
*   `GET /api/analytics`

### Database Schema (SQL-like)

```sql
-- Users Table
CREATE TABLE Users (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    passwordHash VARCHAR(255) NOT NULL,
    role ENUM('super_admin', 'masjid_admin', 'advertiser') NOT NULL,
    masjidId VARCHAR(255), -- FK to Masjids, nullable
    name VARCHAR(255),
    organization VARCHAR(255),
    status ENUM('active', 'suspended') DEFAULT 'active',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Masjids Table
CREATE TABLE Masjids (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT,
    city VARCHAR(255),
    country VARCHAR(255),
    gmtTimezone VARCHAR(50),
    adminId VARCHAR(255) UNIQUE, -- FK to Users
    selectedLayout ENUM('layout1', 'layout2') DEFAULT 'layout1',
    slideRotationInterval INT DEFAULT 10, -- in seconds
    paymentLink TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (adminId) REFERENCES Users(id) ON DELETE SET NULL
);

-- PrayerTimes Table
CREATE TABLE PrayerTimes (
    id VARCHAR(255) PRIMARY KEY,
    masjidId VARCHAR(255) NOT NULL,
    name ENUM('Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha') NOT NULL,
    waqt VARCHAR(10) NOT NULL,
    iqamah VARCHAR(10) NOT NULL,
    date DATE NOT NULL, -- For specific dates, or a default for recurring
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (masjidId) REFERENCES Masjids(id) ON DELETE CASCADE
);

-- Slides Table
CREATE TABLE Slides (
    id VARCHAR(255) PRIMARY KEY,
    masjidId VARCHAR(255) NOT NULL,
    type ENUM('image', 'text', 'video', 'announcement', 'advertisement') NOT NULL,
    title VARCHAR(255),
    content TEXT,
    mediaUrl TEXT, -- URL to Firebase Storage/Cloudinary
    link TEXT,
    duration INT, -- Individual slide duration in seconds
    isActive BOOLEAN DEFAULT TRUE,
    isApproved BOOLEAN DEFAULT FALSE, -- For advertiser ads
    createdBy VARCHAR(255), -- FK to Users
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (masjidId) REFERENCES Masjids(id) ON DELETE CASCADE,
    FOREIGN KEY (createdBy) REFERENCES Users(id) ON DELETE SET NULL
);

-- AdRequests Table
CREATE TABLE AdRequests (
    id VARCHAR(255) PRIMARY KEY,
    advertiserId VARCHAR(255) NOT NULL,
    masjidId VARCHAR(255) NOT NULL,
    slideId VARCHAR(255), -- FK to Slides, once approved and created
    status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
    rejectionReason TEXT,
    requestedDuration VARCHAR(50), -- e.g., "1 month", "3 months"
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (advertiserId) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (masjidId) REFERENCES Masjids(id) ON DELETE CASCADE,
    FOREIGN KEY (slideId) REFERENCES Slides(id) ON DELETE SET NULL
);
```

### .env.example

<dyad-write path=".env.example" description="Creating an example environment variables file.">
# Frontend Environment Variables (if any)
VITE_APP_NAME="Masjid Connect TV"

# Backend Environment Variables (Conceptual)
# Replace with your actual credentials
DATABASE_URL="mysql://user:password@host:port/database"
JWT_SECRET="your_jwt_secret_key_here"
FIREBASE_API_KEY="your_firebase_api_key"
FIREBASE_AUTH_DOMAIN="your_firebase_auth_domain"
FIREBASE_PROJECT_ID="your_firebase_project_id"
FIREBASE_STORAGE_BUCKET="your_firebase_storage_bucket"
FIREBASE_MESSAGING_SENDER_ID="your_firebase_messaging_sender_id"
FIREBASE_APP_ID="your_firebase_app_id"
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"