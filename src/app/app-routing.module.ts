import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { Blog1Component } from './blog/blog1/blog1.component';
import { Blog2Component } from './blog/blog2/blog2.component';
import { Blog3Component } from './blog/blog3/blog3.component';
import { Blog4Component } from './blog/blog4/blog4.component';
import { BodyButterComponent } from './body-butter/body-butter.component';
import { Bodybutter1Component } from './body-butter/bodybutter1/bodybutter1.component';
import { Bodybutter2Component } from './body-butter/bodybutter2/bodybutter2.component';
import { Bodybutter3Component } from './body-butter/bodybutter3/bodybutter3.component';
import { Bodybutter4Component } from './body-butter/bodybutter4/bodybutter4.component';
import { CartComponent } from './cart/cart.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HairGelComponent } from './hair-gel/hair-gel.component';
import { Hairgel1Component } from './hair-gel/hairgel1/hairgel1.component';
import { Hairgel2Component } from './hair-gel/hairgel2/hairgel2.component';
import { Hairgel3Component } from './hair-gel/hairgel3/hairgel3.component';
import { Hairgel4Component } from './hair-gel/hairgel4/hairgel4.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LipstickComponent } from './lipstick/lipstick.component';
import { Lipstick1Component } from './lipstick/lipstick1/lipstick1.component';
import { Lipstick2Component } from './lipstick/lipstick2/lipstick2.component';
import { Lipstick3Component } from './lipstick/lipstick3/lipstick3.component';
import { Lipstick4Component } from './lipstick/lipstick4/lipstick4.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { SerumComponent } from './serum/serum.component';
import { Serum1Component } from './serum/serum1/serum1.component';
import { Serum2Component } from './serum/serum2/serum2.component';
import { Serum3Component } from './serum/serum3/serum3.component';
import { Serum4Component } from './serum/serum4/serum4.component';
import { ShampooComponent } from './shampoo/shampoo.component';
import { Shampoo1Component } from './shampoo/shampoo1/shampoo1.component';
import { Shampoo2Component } from './shampoo/shampoo2/shampoo2.component';
import { Shampoo3Component } from './shampoo/shampoo3/shampoo3.component';
import { Shampoo4Component } from './shampoo/shampoo4/shampoo4.component';
import { SignupComponent } from './signup/signup.component';
import { SoapComponent } from './soap/soap.component';
import { Soap1Component } from './soap/soap1/soap1.component';
import { Soap2Component } from './soap/soap2/soap2.component';
import { Soap3Component } from './soap/soap3/soap3.component';
import { Soap4Component } from './soap/soap4/soap4.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'resetpassword', component:ForgotpasswordComponent},
  {path:'profile', component:ProfileComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'cart', component:CartComponent},
  {path:'orders', component:OrdersComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog1', component:Blog1Component},
  {path:'blog2', component:Blog2Component},
  {path:'blog3', component:Blog3Component},
  {path:'blog4', component:Blog4Component},
  {path:'soap', component:SoapComponent},
  {path:'soap1', component:Soap1Component},
  {path:'soap2', component:Soap2Component},
  {path:'soap3', component:Soap3Component},
  {path:'soap4', component:Soap4Component},
  {path:'shampoo', component:ShampooComponent},
  {path:'shampoo1', component:Shampoo1Component},
  {path:'shampoo2', component:Shampoo2Component},
  {path:'shampoo3', component:Shampoo3Component},
  {path:'shampoo4', component:Shampoo4Component},
  {path:'serum', component:SerumComponent},
  {path:'serum1', component:Serum1Component},
  {path:'serum2', component:Serum2Component},
  {path:'serum3', component:Serum3Component},
  {path:'serum4', component:Serum4Component},
  {path:'body-butter', component:BodyButterComponent},
  {path:'bodybutter1', component:Bodybutter1Component},
  {path:'bodybutter2', component:Bodybutter2Component},
  {path:'bodybutter3', component:Bodybutter3Component},
  {path:'bodybutter4', component:Bodybutter4Component},
  {path:'hair-gel', component:HairGelComponent},
  {path:'hairgel1', component:Hairgel1Component},
  {path:'hairgel2', component:Hairgel2Component},
  {path:'hairgel3', component:Hairgel3Component},
  {path:'hairgel4', component:Hairgel4Component},
  {path:'lipstick', component:LipstickComponent},
  {path:'lipstick1', component:Lipstick1Component},
  {path:'lipstick2', component:Lipstick2Component},
  {path:'lipstick3', component:Lipstick3Component},
  {path:'lipstick4', component:Lipstick4Component},
  {path:'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
