import axios from "axios"
import { defineStore } from 'pinia'
const dbPath = "/portfolio/db.json";
export const store = defineStore({
  id: 'Store',
  state: () => ({
  }),
  actions: {
    async getHeader(cb: (success: boolean, msg: any) => any) {
      try {
        const { data } = await axios.get(dbPath)
        cb(true, data.header)
      } catch (error: any) {
        cb(false, error.message)
      }
    },
    async getProjects(cb: (success: boolean, msg: any) => any) {
      try {
        const { data } = await axios.get(dbPath)
        cb(true, data.projects)
      } catch (error: any) {
        cb(false, error.message)
      }
    },
    async getSkills(cb: (success: boolean, msg: any) => any) {
      try {
        const { data } = await axios.get(dbPath)
        cb(true, data.skills)
      } catch (error: any) {
        cb(false, error.message)
      }
    },
    async getFeeds(cb: (success: boolean, msg: any) => any) {
      try {
        const { data } = await axios.get(dbPath)
        cb(true, data.testimonials)
      } catch (error: any) {
        cb(false, error.message)
      }
    },
    async getContact(cb: (success: boolean, msg: any) => any) {
      try {
        const { data } = await axios.get(dbPath)
        cb(true, data.contact)
      } catch (error: any) {
        cb(false, error.message)
      }
    },
  },
})
