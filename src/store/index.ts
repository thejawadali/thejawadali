import { doc, getDoc } from "firebase/firestore"
import { defineStore } from 'pinia'
import db from "../firebase"

const pathName = "portfolio"

export const store = defineStore({
  id: 'Store',
  state: () => ({
  }),
  actions: {
    async getHeader(cb: (success: boolean, msg: any) => any) {
      const docSnap = await getDoc(doc(db, pathName, "header"))
      if (docSnap.exists()) {
        cb(true, docSnap.data())
      } else {
        cb(false, "Error Occured")
      }
    },
    async getProjects(cb: (success: boolean, msg: any) => any) {
      const docSnap = await getDoc(doc(db, pathName, "work"))
      if (docSnap.exists()) {
        cb(true, docSnap.data())
      } else {
        cb(false, "Error Occured")
      }
    },
    async getContactInfo(cb: (success: boolean, msg: any) => any) {
      const docSnap = await getDoc(doc(db, pathName, "contact"))
      if (docSnap.exists()) {
        cb(true, docSnap.data())
      } else {
        cb(false, "Error Occured")
      }
    },
    async getSkills(cb: (success: boolean, msg: any) => any) {
      const docSnap = await getDoc(doc(db, pathName, "skills"))
      if (docSnap.exists()) {
        cb(true, docSnap.data())
      } else {
        cb(false, "Error Occured")
      }
    },

  },
})
