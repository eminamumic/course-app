export interface CourseFormValues {
  id?: string
  courseName: string
  numberOfParticipants: number
  courseClassification: 'Technical' | 'Soft skills' | 'Business'
  courseDepartment: 'All' | 'Java' | '.NET' | 'SAP'
  participantGroups: {
    developers: boolean
    managers: boolean
    hr: boolean
    administration: boolean
  }
}

export interface CourseFilterValues {
  courseName: string | null
  courseDepartment: string | null
  courseClassification: string | null
}
