import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/theme.css'
import './index.css'
const rootEl = document.getElementById('root')
function renderFatalError(message: string) {
  if (!rootEl) return
  rootEl.innerHTML = ''
  const wrap = document.createElement('div')
  wrap.style.cssText = 'max-width:420px;margin:80px auto;padding:24px;text-align:center;font-family:sans-serif;color:#2c2630;'
  const h1 = document.createElement('h1'); h1.textContent = '起動できませんでした（V69）'
  const p = document.createElement('p'); p.textContent = message
  const btn = document.createElement('button'); btn.textContent = '再読み込み'; btn.onclick = () => window.location.reload()
  wrap.appendChild(h1); wrap.appendChild(p); wrap.appendChild(btn); rootEl.appendChild(wrap)
}
if (!rootEl) console.error('#root 要素が見つかりませんでした')
else import('./App.tsx').then(({ default: App }) => createRoot(rootEl).render(<StrictMode><App /></StrictMode>)).catch((err: unknown) => renderFatalError(err instanceof Error && err.message ? err.message : 'アプリの起動に失敗しました。'))
