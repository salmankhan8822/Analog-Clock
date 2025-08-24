# 🕒 Analog Clock Project

This is a simple **Analog Clock** built using **HTML, CSS, and JavaScript**.  
The clock shows the **current time** with moving **hour, minute, and second hands**.

---

## 🚀 Features
- Real-time working **analog clock**
- Smooth rotation of **second, minute, and hour hands**
- Clean and responsive design
- Uses **CSS transforms** for rotation

---

## 📂 Project Structure

## 🛠️ How It Works
1. **JavaScript Date Object** is used to get the **current time**.
2. Each hand (hour, minute, second) is rotated using:
   - **Seconds hand** → `(seconds / 60) * 360`
   - **Minutes hand** → `(minutes / 60) * 360`
   - **Hours hand** → `(hours / 12) * 360 + (minutes / 60) * 30`
3. The rotation is applied using **CSS `transform: rotate()`**.

---

## ▶️ How to Run
1. Clone or download this repository
2. Open `index.html` in your browser
3. You’ll see a live working analog clock ⏰

---

## 📚 Learning Concepts
- HTML structure for clock hands
- CSS positioning & transform
- JavaScript **Date object**
- JavaScript **DOM manipulation**

---

## 💡 Future Improvements
- Add **dark mode** 🌙
- Add **digital clock** below analog clock
- Style with **glassmorphism or 3D effect**

---

## 🧑‍💻 Author
Made with ❤️ by **[salmankhan]**

