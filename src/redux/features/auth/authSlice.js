import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { toast } from "react-toastify";

const initialState = {
  isLoggledIn: false,
  user: null,
  users: [],
  twoFactor: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  verifiedUsers: 0,
  suspendedUsers: 0,
};

//register user
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//book user
export const bookUser = createAsyncThunk(
  "auth/bookUser",
  async (userData, thunkAPI) => {
    try {
      return await authService.bookUser(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//contact user
export const contactUser = createAsyncThunk(
  "auth/contactUser",
  async (userData, thunkAPI) => {
    try {
      return await authService.contactUser(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//login user
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//logout user
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    return await authService.logout();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

//Get user
export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    return await authService.getUser();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

//getusers
export const getusers = createAsyncThunk(
  "auth/getusers",
  async (_, thunkAPI) => {
    try {
      return await authService.getusers();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//getContact
export const getContact = createAsyncThunk(
  "auth/getContact",
  async (_, thunkAPI) => {
    try {
      return await authService.getContact();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//deleteusers
export const deleteUsers = createAsyncThunk(
  "auth/deleteUsers",
  async (id, thunkAPI) => {
    try {
      return await authService.deleteUsers(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//deleteContacts
export const deleteContacts = createAsyncThunk(
  "auth/deleteContacts",
  async (id, thunkAPI) => {
    try {
      return await authService.deleteContacts(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    CALC_VERIFIED_USER(state, action) {
      const array = [];
      state.users.map((user) => {
        const { isVerified } = user;
        return array.push(isVerified);
      });
      let count = 0;
      array.forEach((item) => {
        if (item === true) {
          count += 1;
        }
      });
      state.verifiedUsers = count;
    },

    CALC_SUSPENDED_USER(state, action) {
      const array = [];
      state.users.map((user) => {
        const { role } = user;
        return array.push(role);
      });
      let count = 0;
      array.forEach((item) => {
        if (item === "suspended") {
          count += 1;
        }
      });
      state.suspendedUsers = count;
    },
  },
  extraReducers: (builder) => {
    builder

      //register user
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggledIn = true;
        state.user = action.payload;
        console.log(action.payload);
        toast.success("Registration successful");
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.error(action.payload);
      })
      //book user
      .addCase(bookUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(bookUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggledIn = true;
        state.user = action.payload;
        console.log(action.payload);
        toast.success("Booking appointment successful");
      })
      .addCase(bookUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.error(action.payload);
      })

      //contactUser
      .addCase(contactUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(contactUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggledIn = true;
        state.user = action.payload;
        console.log(action.payload);
        toast.success("Contact successful");
      })
      .addCase(contactUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.error(action.payload);
      })

      //login user
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggledIn = true;
        state.user = action.payload;
        console.log(action.payload);
        toast.success("Login successful");
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.error("Somthing wents wrong,please try again.");
      })

      //logout user
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggledIn = false;
        state.user = null;
        toast.success(action.payload);
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      //getUser
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggledIn = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      //getusers
      .addCase(getusers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getusers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(getusers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      //getContact
      .addCase(getContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(getContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      //deleteUsers
      .addCase(deleteUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })
      .addCase(deleteUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      //deleteContacts
      .addCase(deleteContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        toast.success(action.payload);
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
  },
});

export const { RESET, CALC_SUSPENDED_USER, CALC_VERIFIED_USER } =
  authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggledIn;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;

// rxslice
