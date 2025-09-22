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
      edit_user: 'Edit User',
      create_new_user: 'Create new user',
      create_user_title: 'Create new user',
      save: 'Save',
      cancel: 'Cancel',
      please_fill_name: 'Please enter a name',
      please_fill_lastname: 'Please enter a last name',
      confirm_delete_user: 'Are you sure you want to delete this user?',
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
      edit_user: 'Benutzer bearbeiten',
      create_new_user: 'Neuen Benutzer erstellen',
      create_user_title: 'Neuen Benutzer erstellen',
      save: 'Speichern',
      cancel: 'Abbrechen',
      please_fill_name: 'Bitte geben Sie einen Vornamen ein',
      please_fill_lastname: 'Bitte geben Sie einen Nachnamen ein',
      confirm_delete_user: 'Möchten Sie diesen Benutzer wirklich löschen?',
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
