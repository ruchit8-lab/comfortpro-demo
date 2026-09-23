CREATE TABLE `demo_leads` (
	`id` text PRIMARY KEY NOT NULL,
	`service` text NOT NULL,
	`zip` text NOT NULL,
	`urgency` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`notes` text NOT NULL,
	`created_at` text NOT NULL
);
