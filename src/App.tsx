import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext'
import { AppShell } from './components/layout/AppShell'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { CalendarPage } from './pages/CalendarPage'
import { DayDetail } from './pages/DayDetail'
import { TodoPage } from './pages/TodoPage'
import { ItemsPage } from './pages/ItemsPage'
import { AIPage } from './pages/AIPage'
import { EventForm } from './pages/EventForm'
import { EventDetail } from './pages/EventDetail'
import { SettingsPage } from './pages/SettingsPage'
function RequireAuth({ children }: { children: React.ReactNode }) { const { user, loading } = useAuth(); if (loading) return <div className="page">読み込み中...</div>; if (!user) return <Navigate to="/login" replace />; return <>{children}</> }
function Routed() { const { user } = useAuth(); return <Routes><Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} /><Route path="/" element={<RequireAuth><DataProvider><AppShell /></DataProvider></RequireAuth>}><Route index element={<Home />} /><Route path="calendar" element={<CalendarPage />} /><Route path="calendar/day/:date" element={<DayDetail />} /><Route path="todo" element={<TodoPage />} /><Route path="items" element={<ItemsPage />} /><Route path="ai" element={<AIPage />} /><Route path="event/new" element={<EventForm />} /><Route path="event/:id" element={<EventDetail />} /><Route path="settings" element={<SettingsPage />} /></Route><Route path="*" element={<Navigate to="/" replace />} /></Routes> }
export default function App() { return <ErrorBoundary><BrowserRouter><AuthProvider><Routed /></AuthProvider></BrowserRouter></ErrorBoundary> }
