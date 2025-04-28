# 🧩 Pokémon Explorer (React Application)

## 📖 Project Overview
This is a **React application** that fetches data from the [PokeAPI](https://pokeapi.co/) and allows users to search and filter through Pokémon.  
The application displays a list of Pokémon with basic information and supports real-time search and filtering based on Pokémon types.

---

## 🎯 Features

### 1. Data Fetching
- Fetches the first **150 Pokémon** from the PokeAPI.
- Displays each Pokémon in a **card layout** showing:
  - **Name**
  - **Image (sprite)**
  - **Type(s)**
  - **ID number**

### 2. Search & Filter
- **Real-time search input** to filter Pokémon by name.
- **Dropdown filter** to filter Pokémon by type (e.g., Fire, Water, Grass).
- Proper **loading** indicators while fetching data.
- Displays appropriate **empty states** if no results are found.

### 3. Responsive UI/UX
- **Responsive design** that works across desktop and mobile devices.
- **Simple header** displaying the application name.
- Styled using **CSS** (or optionally a CSS framework).

---

## 🛠 Technical Details

- Built using **React functional components** with **React Hooks**.
- **Reusable components** structure for better maintainability.
- Handles edge cases like:
  - No search results.
  - API loading errors.
- Clean and organized folder structure.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/pokemon-explorer.git
