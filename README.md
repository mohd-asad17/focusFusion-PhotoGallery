# 📸 React Photo Gallery

A responsive **Photo Gallery Web Application** built with **React + Vite + Tailwind CSS**.  
The application fetches photos from the **Picsum Photos public API**, displays them in a responsive grid, supports **real-time search filtering**, and allows users to **mark photos as favourites** with persistence using **localStorage**.

---

# 🚀 Tech Stack

- React (Functional Components + Hooks)
- Vite
- Tailwind CSS
- Picsum Photos API

React Hooks used:
- `useReducer`
- `useMemo`
- `useCallback`
- Custom Hook (`useFetchPhotos`)

---

# ✨ Features

## 1. Fetch Photos from Public API

The app fetches **30 photos** from the Picsum Photos API on initial load.

API Endpoint:
```
https://picsum.photos/v2/list?limit=30
```

Features implemented:
- Loading spinner while fetching photos
- Error message if the API request fails
- Data stored in component state after fetching

---

## 2. Responsive Photo Grid

Photos are displayed in a responsive grid layout.

| Device | Columns |
|------|------|
| Desktop | 4 Columns |
| Tablet | 2 Columns |
| Mobile | 1 Column |

Each photo card includes:
- Photo image
- Author name
- Favourite toggle button (heart icon)

---

## 3. Real-Time Search Filter

A search input is displayed at the top of the page.

Functionality:
- Filters photos **by author name**
- Updates results **as the user types**
- No page reload
- No additional API calls
- Filtering is done on **already fetched data**

---

## 4. Favourites System (useReducer)

Users can mark photos as favourites using the **heart icon**.

Implementation details:
- State managed using **React `useReducer`**
- Toggle functionality for favourites
- Favourites persist across page refresh using **localStorage**

Reducer actions include:

```
ADD_FAVOURITE
REMOVE_FAVOURITE
```

---

## 5. Custom Hook: `useFetchPhotos`

All API logic is extracted into a reusable custom hook.

Hook:

```
useFetchPhotos()
```

Returns:

```
{
  photos,
  loading,
  error
}
```

Benefits:
- Separation of concerns
- Cleaner components
- Reusable data fetching logic
  
---


# ⚙️ Installation & Setup

## 1. Clone the repository

```
git clone <repository-url>
cd photo-gallery
```

---

## 2. Install dependencies

```
npm install
```

---

## 3. Run development server

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

# 📡 API Used

Picsum Photos API

```
https://picsum.photos/v2/list?limit=30
```

The API returns:
- Image URL
- Author name
- Image metadata

---

# 💾 Local Storage

Favourite photos are stored using:

```
localStorage
```

This ensures favourite selections remain after refreshing the page.

---
