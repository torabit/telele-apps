-- CreateTable
CREATE TABLE "Profile" (
    "id" VARCHAR(30) NOT NULL,
    "userId" VARCHAR(16) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "genderId" INTEGER NOT NULL DEFAULT 0,
    "personalColor" VARCHAR(6) NOT NULL DEFAULT E'ffc600',
    "biography" VARCHAR(1000) NOT NULL DEFAULT E'',
    "birthday" DATE,
    "startTime" TIME,
    "endTime" TIME,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileIcon" (
    "profileId" VARCHAR(30) NOT NULL,
    "path" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ProfileIcon_pkey" PRIMARY KEY ("profileId")
);

-- CreateTable
CREATE TABLE "FollowGame" (
    "userId" VARCHAR(16) NOT NULL,
    "gameId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "FollowGame_pkey" PRIMARY KEY ("userId","gameId")
);

-- CreateTable
CREATE TABLE "FollowUser" (
    "userId" VARCHAR(16) NOT NULL,
    "followUserId" VARCHAR(16) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "FollowUser_pkey" PRIMARY KEY ("userId","followUserId")
);

-- CreateTable
CREATE TABLE "Gender" (
    "genderId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Gender_pkey" PRIMARY KEY ("genderId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Gender_genderId_key" ON "Gender"("genderId");

-- AddForeignKey
ALTER TABLE "ProfileIcon" ADD CONSTRAINT "ProfileIcon_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowGame" ADD CONSTRAINT "FollowGame_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUser" ADD CONSTRAINT "FollowUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
