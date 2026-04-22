# URL Shortener (Node.js, No Database)

## 📌 Description

This project is a basic URL Shortener built using Node.js and Express.
It converts long URLs into short links and redirects users to the original URL when the short link is opened.

No database is used in this project. All data is stored temporarily in memory.

---

## 🚀 Features

* Convert long URLs into short URLs
* Generate random 6-character short codes
* Redirect short URL to original URL
* Lightweight and simple implementation

---

## 🛠️ Technologies Used

* Node.js
* Express.js

---

## 📁 Project Structure

```
url-shortener/
│
├── server.js
├── package.json
```

---

## ⚙️ How to Run

### Step 1: Create project folder

```
mkdir url-shortener
cd url-shortener
```

### Step 2: Initialize project

```
npm init -y
```

### Step 3: Install Express

```
npm install express
```

### Step 4: Run the server

```
node server.js
```

Server will start at:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

### 1. Shorten URL

**POST** `/shorten`

Request body:

```json
{
  "url": "https://example.com"
}
```

Response:

```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

---

### 2. Redirect URL

**GET** `/:code`

Example:

```
http://localhost:3000/abc123
```

This will redirect to the original URL.

---

## 🧠 Working

* User sends a long URL to the server
* Server generates a random short code
* Mapping is stored in memory
* When short URL is opened, server redirects to original URL

---

## ⚠️ Limitations

* Data is not saved permanently
* All data is lost when server restarts
* No analytics or tracking

---

## 🔮 Future Improvements

* Add database support
* Custom short URLs
* Expiry for links
* Click tracking

---

## 👨‍💻 Author

Nipurn Pandey

---

## 📌 Note

This project is created for learning backend development concepts such as API creation, routing, and request handling using Node.js and Express.
