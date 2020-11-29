import { createAsyncThunk } from '@reduxjs/toolkit';

import { getGeolocation } from '../utils/getGeolocation';

export const fetchGeolocation = createAsyncThunk('fetchGeolocation', getGeolocation);
