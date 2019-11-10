# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|E-mail|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :groups, through: :users_groups
- has_many :users_groups
- has_many :messages


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|user_id|references |null: false, foreign_key: true|
|group_id|references |null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: :users_groups
- has_many :users_groups
- has_many :messages

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references |null: false, foreign_key: true|
|group_id|references |null: false, foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group