'use client'

import { useState } from 'react'

interface HandleInputRowProps {
  platform: 'CODECHEF' | 'CODEFORCES' | 'LEETCODE'
  placeholder: string
  value: string
  loading?: boolean
  onChange: (value: string) => void
  onSubmit: () => void
  message?: string
}

export default function HandleInputRow({
  platform,
  placeholder,
  value,
  loading,
  onChange,
  onSubmit,
  message,
}: HandleInputRowProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <label className="text-xs font-bold text-muted uppercase tracking-widest min-w-[100px]">
          {platform}
        </label>
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-4 py-2.5 rounded-xl bg-surface border border-border text-primary text-sm placeholder:text-muted focus:outline-none focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/5 transition-all"
          />
          <button
            onClick={onSubmit}
            disabled={loading}
            className="px-6 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-violet-600/20 active:scale-95 whitespace-nowrap"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </div>
      {message && (
        <p className={`text-xs ml-[112px] ${message.includes('error') || message.includes('Failed') ? 'text-rose-500' : 'text-emerald-500'}`}>
          {message}
        </p>
      )}
    </div>
  )
}
