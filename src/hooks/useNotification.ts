'use client'

import { useState, useCallback } from 'react'

export function useNotification() {
  const [permission, setPermission] = useState<NotificationPermission>('default')

  const requestPermission = useCallback(async () => {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications')
      return
    }

    const result = await Notification.requestPermission()
    setPermission(result)
  }, [])

  const showNotification = useCallback((title: string, body: string) => {
    if (!('Notification' in window)) {
      return
    }

    if (Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
      })
    }
  }, [])

  return { permission, requestPermission, showNotification }
}
