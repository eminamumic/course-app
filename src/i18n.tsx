import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      app_name: 'Courses App',
      home_view: 'Home View',
      course_management: 'Course Management',
      course_overview: 'Course Overview',
      administration: 'Administration',
      administration_view: 'Administration',
      users: 'Users',
      user_id: 'User ID',
      name: 'Name',
      last_name: 'Last Name',
      edit: 'Edit',
      delete: 'Delete',
      create_new_user: 'Create new user',
      create_user_title: 'Create new user',
      save: 'Save',
      cancel: 'Cancel',
      welcome_user: 'WELCOME USER 1',
      language: 'LANGUAGE',
      english: 'English',
      german: 'German',
      log_out: 'Log out',
    },
  },
  de: {
    translation: {
      app_name: 'Kurs-App',
      home_view: 'Startseite',
      course_management: 'Kursverwaltung',
      course_overview: 'Kursübersicht',
      administration: 'Verwaltung',
      administration_view: 'Verwaltung',
      users: 'Benutzer',
      user_id: 'Benutzer-ID',
      last_name: 'Nachname',
      edit: 'Bearbeiten',
      delete: 'Löschen',
      create_new_user: 'Neuen Benutzer erstellen',
      create_user_title: 'Neuen Benutzer erstellen',
      save: 'Speichern',
      cancel: 'Abbrechen',
      welcome_user: 'WILLKOMMEN BENUTZER 1',
      language: 'SPRACHE',
      english: 'Englisch',
      german: 'Deutsch',
      log_out: 'Abmelden',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
