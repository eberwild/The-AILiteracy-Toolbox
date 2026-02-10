import rateLimit from "express-rate-limit";

// rate limit -> 100 request / 15 min
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000 ,
  max: 100 ,
  message: 'Too many request, little pause for you!'
});

export const loginLimiter = rateLimit({
    windowMs: 10 * 60 * 1000 ,
    max: 10 ,
    message: 'Too many login attempts!'
});

export const registerLimiter = rateLimit({
    windowMs: 30 * 60 * 1000 ,
    max: 3 ,
    message: 'Too many registrations!'
})