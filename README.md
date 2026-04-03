# 🖥️ Portfolio Dashboard  
### CPE408A – Emerging Technologies 1 in CpE  
**Technological Institute of the Philippines – Manila**

A unified portfolio dashboard showcasing the academic backgrounds, technical skills, projects, and achievements of three Computer Engineering students in one cohesive web application.

---

## 👥 Members
- Francien Nicole E. Ausan  
- Maryneil G. Co  
- Kerstein Ashby C. San Pedro  

**Instructor:** Engr. Adrian Dave E. Ignacio  

---

## 🔗 Live Demo  
[https://student-portfolio-zeta.vercel.app/]

---

## 📌 About  
This portfolio dashboard presents three individually designed personal portfolio pages, each containing:

- Academic autobiography  
- Academic background and educational history  
- Technical skills categorized by domain  
- Completed projects with descriptions  
- Certifications, achievements, and awards  
- Seminars and training attended  
- Contact information  

---

## 🛠️ Tech Stack  

| Technology | Purpose |
|---|---|
| React.js (v18) | Frontend framework for building UI components |
| React Hooks | State and lifecycle management (`useState`, `useEffect`, `useRef`) |
| Context API | Global state management |
| CSS (Custom Styling) | Layout, design, and responsiveness |
| Vite | Development server and build tool |

---

## ✨ Features  

- 🧑‍💼 Three individually designed portfolio pages  
- 📖 Detailed academic autobiography per member  
- 🛠️ Skills, projects, certifications, and achievements display  
- ⚡ Dynamic rendering using React state management  
- 🎯 Component-based modular design  
- 📱 Responsive layout for different screen sizes  
- ♿ Basic accessibility using semantic HTML  

---

## 🧠 Advanced Implementation  

- **Context API for Global State Management**  
  Enables efficient sharing of data across components without prop drilling  

- **React Hooks Integration**  
  Handles dynamic updates and lifecycle behavior of components  

- **Component Reusability**  
  Promotes clean structure and easier maintenance  

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js v14.0 or higher  
- npm  
- Git  

---

### Installation  

**1. Clone the repository**
```bash
git clone https://github.com/MACK0820/student-portfolio.git
cd [student-portfolio]
````

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

**4. Build for production**

```bash
npm run build
```

---

## 📁 Folder Structure

```
src/
 ├── components/    # Reusable UI components
 ├── pages/         # Individual portfolio pages
 ├── assets/        # Images and static files
 ├── styles/        # Global CSS files
 ├── App.jsx        # Root component (no routing used)
 └── main.jsx       # Entry point
```

---

## ⚠️ Notes

* The application does **not use React Router**; navigation is handled through component rendering.
* Tailwind CSS is **not used**; styling is implemented using custom CSS.
* The system is **fully frontend-based** with no backend integration.

---

## 📄 License

This project is for academic purposes only.

