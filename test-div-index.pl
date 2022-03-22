# @date: 2/2/22
# @author: Melany Diaz

#!/usr/bin/perl

use strict;
use warnings;
use WWW::Mechanize;
use Time::localtime;
use Browser::Open qw( open_browser );
use vars qw($mech $my_size_available %availabilities);

# 0 2 4 6
# 1 3 5 7

# 0 3 6 9
# 1 4 7 10
# 2 5 8 11

my $sizeTwo = 2;
my $sizeThree = 3;

for(my $i = 0; $i < $sizeTwo; $i++){
	my $div = 0;

	my 	$w = $i +  $div;
	$div += $sizeTwo;
	my 	$x = $i +  $div; 
	$div += $sizeTwo;
	my 	$y = $i +  $div;
	$div += $sizeTwo; 
	my 	$z = $i +  $div;
	warn ("$w $x $y $z");


}
warn "---------------------";

for(my $i = 0; $i < $sizeThree; $i++){
	my $div = 0;

	my 	$w = $i +  $div;
	$div += $sizeThree;
	my 	$x = $i +  $div; 
	$div += $sizeThree;
	my 	$y = $i +  $div;
	$div += $sizeThree; 
	my 	$z = $i +  $div;
	warn ("$w $x $y $z");
}
