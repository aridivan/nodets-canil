import { Request, Response } from "express";

export const home = (re: Request, res:Response) =>{
    res.send('home no controller"');
   // res.render('pages/page');
}
export const dogs = (re: Request, res:Response) =>{
    // res.render('pages/page');
 }
 export const cats = (re: Request, res:Response) =>{
    // res.render('pages/page');
 }
 export const fishes = (re: Request, res:Response) =>{
    // res.render('pages/page');
 }