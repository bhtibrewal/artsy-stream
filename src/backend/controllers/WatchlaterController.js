import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to User watchlater are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting videos from user's watch later.
 * send GET Request at /api/user/watchlater
 * */
export const getWatchLaterVideosHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    return new Response(200, {}, { watchlater: user.watchlater });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding videos to user's watchlater.
 * send POST Request at /api/user/watchlater
 * body contains {video}
 * */

 export const addVideoToWatchLaterHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);
    try {
      if (!user) {
        return new Response(
          404,
          {},
          {
            errors: ["The email you entered is not Registered. Not Found error"],
          }
        );
      }
      const { video } = JSON.parse(request.requestBody);
      if (user.watchlater.some((item) => item.id === video.id)) {
        return new Response(
          409,
          {},
          {
            errors: ["The video is already in your watch later"],
          }
        );
      }
      user.watchlater.push(video);
      return new Response(201, {}, { watchlater: user.watchlater });
    } catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
  };

  /**
 * This handler handles removing videos from user's watchlater.
 * send DELETE Request at /api/user/watchlater/:videoId
 * */

export const removeVideoFromWatchLaterHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);
    try {
      if (!user) {
        return new Response(
          404,
          {},
          {
            errors: ["The email you entered is not Registered. Not Found error"],
          }
        );
      }
      const videoId = request.params.videoId;
      const filteredWatchLater = user.watchlater.filter((item) => item._id !== videoId);
      this.db.users.update({ watchlater: filteredWatchLater });
      return new Response(200, {}, { watchlater: filteredWatchLater });
    } catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
  };