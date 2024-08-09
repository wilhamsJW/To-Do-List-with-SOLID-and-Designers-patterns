import { ArrayInterpolation } from '@emotion/react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { DataNote } from '../../interface/index'

interface MediaQueryState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isSmallScreen: boolean;
  isDesktopDrawer: boolean
}

interface RegisterState {
  isRegistering: boolean;
  isAuthenticated: boolean;
  isNewAuthenticated: boolean;
  isNewStationFavorite: boolean;
  loggedUser: User | null;
  noListStationRadio: boolean,
  isLoading: boolean,
  mediaQuery: MediaQueryState,
  removeIconCheckedList: string

  isAddNewTask: boolean
  allTasks: DataNote[]
  isStatusCompleted: string
  isStatusPending: boolean
  editItemId: string
  editTitle: string
  editDescription: string
  filteredData: DataNote[]
  listTask: DataNote[]
  pendenteOrCompleted: string
}

const initialState: RegisterState = {
  isRegistering: false,
  isAuthenticated: false,
  isNewAuthenticated: false,
  isNewStationFavorite: false,
  loggedUser: null,
  noListStationRadio: true,
  isLoading: false,
  removeIconCheckedList: '',

  isAddNewTask: false,
  allTasks: [],
  isStatusCompleted: '',
  isStatusPending: false,
  editItemId: '',
  editTitle: '',
  editDescription: '',
  filteredData: [],
  listTask: [],
  pendenteOrCompleted: '',

  mediaQuery: {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isSmallScreen: false,
    isDesktopDrawer: false
  }
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegistering(state, action: PayloadAction<boolean>) {
      state.isRegistering = action.payload;
    },
    setAuthenticatedUser(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setNewAuthenticatedUser(state, action: PayloadAction<boolean>) {
      state.isNewAuthenticated = action.payload;
    },
    setIsNewStationFavorite(state, action: PayloadAction<boolean>) {
      state.isNewStationFavorite = action.payload;
    },
    setLoggedUser(state, action: PayloadAction<User | null>) {
      state.loggedUser = action.payload;
    },
    setNoListStationRadio(state, action: PayloadAction<boolean>) {
      state.noListStationRadio = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setMediaQuery(state, action: PayloadAction<MediaQueryState>) {
      state.mediaQuery = action.payload;
    }, 
    setRemoveIconCheckedList(state, action: PayloadAction<string>) {
      state.removeIconCheckedList = action.payload;
    },
    setIsAddNewTask(state, action: PayloadAction<boolean>) {
      state.isAddNewTask = action.payload;
    },
    setAllTasksk(state, action: PayloadAction<DataNote[]>) {
      state.allTasks = action.payload;
    },
    setIsStatusCompleted(state, action: PayloadAction<string>) {
      state.isStatusCompleted = action.payload;
    },
    setIsStatusPending(state, action: PayloadAction<boolean>) {
      state.isStatusPending = action.payload;
    },
    setEditItemId(state, action: PayloadAction<string>) {
      state.editItemId = action.payload;
    },
    setEditTitle(state, action: PayloadAction<string>) {
      state.editTitle = action.payload;
    },
    setEditDescription(state, action: PayloadAction<string>) {
      state.editDescription = action.payload;
    },
    setFilteredData(state, action: PayloadAction<DataNote[]>) {
      state.filteredData = action.payload;
    },
    setListTask(state, action: PayloadAction<DataNote[]>) {
      state.listTask = action.payload;
    },
    setPendenteOrCompleted(state, action: PayloadAction<string>) {
      state.pendenteOrCompleted = action.payload;
    }
  },
});

export const { 
  setRegistering,
  setAuthenticatedUser, 
  setNewAuthenticatedUser, 
  setIsNewStationFavorite, 
  setLoggedUser, 
  setIsLoading, 
  setMediaQuery,
  setRemoveIconCheckedList,
  setIsAddNewTask,
  setAllTasksk,
  setIsStatusCompleted,
  setIsStatusPending,
  setEditItemId,
  setEditTitle,
  setEditDescription,
  setFilteredData,
  setListTask,
  setPendenteOrCompleted
 } = registerSlice.actions;

export default registerSlice.reducer;