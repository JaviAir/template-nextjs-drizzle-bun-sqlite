CREATE TABLE `car` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`color` text NOT NULL,
	`doors` integer DEFAULT 1,
	`text` text DEFAULT 'Automatic'
);
