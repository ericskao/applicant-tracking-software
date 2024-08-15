// Unit tests for: api

import { api } from '../api';

jest.mock('node-fetch', () => jest.fn());

const { Response } = jest.requireActual('node-fetch');

describe('api() api method', () => {
  const BASE_URL = 'https://harvest.greenhouse.io/v1';
  const AUTH_TOKEN = 'mockedAuthToken';
  const headers = {
    Authorization: `Basic ${btoa(AUTH_TOKEN + ':')}`,
    'Content-Type': 'application/json',
  };

  beforeEach(() => {
    process.env.GREEN_HOUSE_API_KEY = AUTH_TOKEN;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Happy Path', () => {
    it('should return JSON data when the response is ok', async () => {
      const mockResponseData = { data: 'test' };
      (fetch as any).mockResolvedValue(
        new Response(JSON.stringify(mockResponseData), { status: 200 })
      );

      const result = await api('/test-route', {} as any);

      expect(result).toEqual(mockResponseData);
      expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/test-route`, {
        headers,
      });
    });

    it('should merge custom headers with default headers', async () => {
      const mockResponseData = { data: 'test' };
      const customHeaders = { 'X-Custom-Header': 'custom-value' };
      (fetch as any).mockResolvedValue(
        new Response(JSON.stringify(mockResponseData), { status: 200 })
      );

      const result = await api('/test-route', {
        headers: customHeaders,
      } as any);

      expect(result).toEqual(mockResponseData);
      expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/test-route`, {
        headers: { ...headers, ...customHeaders },
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle network errors gracefully', async () => {
      const mockError = new Error('Network Error');
      (fetch as any).mockRejectedValue(mockError);

      const result = await api('/test-route', {} as any);

      expect(result).toEqual({
        success: false,
        error: 'Network Error',
        status: 400,
      });
      expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/test-route`, {
        headers,
      });
    });

    it('should handle non-JSON responses gracefully', async () => {
      (fetch as any).mockResolvedValue(
        new Response('Not JSON', { status: 200 })
      );

      const result = await api('/test-route', {} as any);

      expect(result).toEqual({
        success: false,
        error: 'Error fetching /test-route',
        status: 400,
      });
      expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/test-route`, {
        headers,
      });
    });

    it('should handle missing Authorization token', async () => {
      delete process.env.GREEN_HOUSE_API_KEY;

      const result = await api('/test-route', {} as any);

      expect(result).toEqual({
        success: false,
        error: 'Error fetching /test-route',
        status: 400,
      });
    });
  });
});

// End of unit tests for: api
