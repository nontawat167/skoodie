export interface ScoreSet  {
  id: string
  year: number
  scoreType: string
  min: number
  max: number
  avg: number
}

export interface University {
  id: string;
  name: string
}


export interface FacultyData {
  id: string
  name: string
  tagId: string
  university: University
}

export type AdmissionInfo = {
  id: string
  name: string
  logo: string
  roundSeats: number[]
  score: ScoreSet | null
  faculty: FacultyData
  updateAt: string
  likes: number
}
