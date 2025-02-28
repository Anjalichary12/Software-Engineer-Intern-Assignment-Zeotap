# Software-Engineer-Intern-Assignment-Zeotap
# **Google Sheets Clone - README**  

## **Project Overview**  
This project is a web-based spreadsheet application that mimics **Google Sheets**. It includes features such as **mathematical functions**, **data validation**, **cell formatting**, and **formula evaluation**.

## **Features**  
✔️ **Spreadsheet Interface**  
- Google Sheets-like UI with **rows, columns, formula bar, and toolbar**  
- **Drag and drop** functionality  
- **Cell dependencies** (automatically update dependent cells)  
- Basic **cell formatting** (bold, italics, font size, color)  
- Add, delete, and resize **rows/columns**  

✔️ **Mathematical Functions**  
- **SUM(range)** → Sum of a range  
- **AVERAGE(range)** → Average of values  
- **MAX(range)** → Maximum value  
- **MIN(range)** → Minimum value  
- **COUNT(range)** → Count of numeric cells  

✔️ **Data Quality Functions**  
- **TRIM()** → Removes spaces  
- **UPPER()** → Converts text to uppercase  
- **LOWER()** → Converts text to lowercase  
- **REMOVE_DUPLICATES(range)** → Removes duplicate rows  
- **FIND_AND_REPLACE(find, replace, range)**  

✔️ **Data Entry & Validation**  
- Supports **text, numbers, dates**  
- Ensures numeric columns contain **only numbers**  

✔️ **Bonus Features**  
- Save and load spreadsheet data  
- Charts & graphs support (future enhancement)  

---

## **Tech Stack**  
**Frontend:** React.js, Handsontable.js  
**Backend:** Node.js, Express.js  
**Database:** None (Data stored in memory for now)  
**Other Libraries:** Axios, Math.js, CORS, Body-parser  

---

## **Installation Guide**  
### **1. Clone the Repository**  
```bash
git clone https://github.com/yourusername/google-sheets-clone.git
cd google-sheets-clone
```

### **2. Install Dependencies**  
#### **Backend Setup**  
```bash
cd backend
npm install
node server.js
```
#### **Frontend Setup**  
```bash
cd ../frontend
npm install
npm start
```
---

## **Usage**  
- Open **http://localhost:3000**  
- Click on any cell and **enter a formula** (e.g., `=SUM(A1:A3)`)  
- Formulas will **auto-update** when values change  
- Use **toolbar** to format cells  
- **Drag and drop** values to apply them to multiple cells  

---

## **Security & Performance Considerations**  
✅ **CORS Handling** – Prevents cross-origin issues  
✅ **Input Validation** – Only valid formulas are evaluated  
✅ **Error Handling** – Displays "Error" for invalid formulas  
✅ **Performance Optimization** – Uses minimal API calls  

---

## **Testing**  
### **1. API Test (Backend)**  
Use **Postman** or `curl` to test formula evaluation:  
```bash
curl -X POST http://localhost:5000/evaluate -H "Content-Type: application/json" -d '{"formula":"2+2"}'
```
Expected response:  
```json
{"result": 4}
```

### **2. UI Test (Frontend)**  
- Open **http://localhost:3000**  
- Enter **=2+2** in a cell  
- It should display **4**  

---

## **GitHub Usage**  
📌 **GitHub Repository:** [GitHub Link](https://github.com/Anjalichary12/Software-Engineer-Intern-Assignment-Zeotap)  
📌 **Branching Strategy:** `main` for stable releases, `dev` for testing  

---

## **Future Enhancements**  
🚀 **Data Persistence** – Store sheets in a database  
🚀 **Multi-User Support** – Allow collaboration  
🚀 **Advanced Charts & Graphs** – Visualize data  

---
