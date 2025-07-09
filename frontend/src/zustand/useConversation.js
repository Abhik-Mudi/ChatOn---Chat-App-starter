import { create } from 'zustand'

// This Zustand store manages the state of the selected conversation and messages
const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation)=>set({selectedConversation}),
  messages: [],
  setMessages: (messages)=>set({messages})
}))

export default useConversation;