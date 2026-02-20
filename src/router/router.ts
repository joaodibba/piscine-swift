import { Router } from 'typecomposer'
import { AppPage } from '../AppPage'
import { Module00Page } from '../Module00Page'
import { Module01Page } from '../Module01Page'
import { Module02Page } from '../Module02Page'
import { Module03Page } from '../Module03Page'
import { Module04Page } from '../Module04Page'
import { Module05Page } from '../Module05Page'
import { Module06Page } from '../Module06Page'
import { Module07Page } from '../Module07Page'
import { Module08Page } from '../Module08Page'
import { Module09Page } from '../Module09Page'

Router.create({
  history: 'hash',
  routes: [
    { path: '/piscine-swift', redirect: '/' },
    { path: '/piscine-swift/', redirect: '/' },
    { path: '/', component: AppPage },
    { path: '/00', component: Module00Page },
    { path: '/01', component: Module01Page },
    { path: '/02', component: Module02Page },
    { path: '/03', component: Module03Page },
    { path: '/04', component: Module04Page },
    { path: '/05', component: Module05Page },
    { path: '/06', component: Module06Page },
    { path: '/07', component: Module07Page },
    { path: '/08', component: Module08Page },
    { path: '/09', component: Module09Page },
  ],
});