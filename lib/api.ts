const BASE_URL = 'https://harvest.greenhouse.io/v1';
const AUTH_TOKEN = process.env.GREEN_HOUSE_API_KEY;

const headers = {
  Authorization: `Basic ${btoa(AUTH_TOKEN + ':')}`,
  'Content-Type': 'application/json',
};

export interface ResponseWithHeadersInterface {
  headers: Headers;
  data: unknown[];
}

export async function api(
  route: string,
  options: RequestInit = {},
  showHeaders?: boolean
): Promise<unknown> {
  try {
    const response = await fetch(`${BASE_URL}${route}`, {
      ...options,
      headers: { ...headers, ...options.headers },
    });

    if (response.ok && !showHeaders) {
      return await response.json();
    } else if (response.ok && showHeaders) {
      return {
        headers: response.headers,
        cache: 'no-cache',
        data: (await response.json()) as unknown,
      };
    }
  } catch (error) {
    console.error(`Error fetching from ${BASE_URL}${route}:`, error);

    // handle error for ErrorDialog here
    return {
      success: false,
      error: error instanceof Error ? error.message : `Error fetching ${route}`,
      status: 400,
    };
  }
}
