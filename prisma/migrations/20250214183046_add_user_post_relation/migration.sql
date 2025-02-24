-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "publisher_is" JSONB NOT NULL,
    "TumPath" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_publisher_is_fkey" FOREIGN KEY ("publisher_is") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
