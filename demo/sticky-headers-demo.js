import '@polymer/polymer/polymer-legacy.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';

export function getTemplate(tableType) {
	const $_documentContainer = document.createElement('template');

	$_documentContainer.innerHTML = `<dom-module id="sticky-headers-demo">
		<template strip-whitespace="">
			<style include="d2l-table-style">
				:host {
					display: block;
				}
				.screenshots {
					display: inline-block;
				}
			</style>
			<div id="app">

				<p>Just Headers</p>
				<d2l-table-wrapper sticky-headers="" type="${tableType}">
					<table class="d2l-table">
						<tbody>
							<tr header="">
								<th>Column header 1 Really Really REALLY long</th>
								<th>Column header 2</th>
								<th>Column header 3</th>
								<th>Column header 4</th>
								<th>Column header 5</th>
								<th>Column header 6</th>
								<th>Column header 7</th>
								<th>Column header 8</th>
								<th>Column header 9</th>
								<th>Column header 10</th>
								<th>Column header 11</th>
								<th>Column header 12</th>
								<th>Column header 13</th>
								<th>Column header 14</th>
								<th>Column header 15</th>
								<th>Column header 16</th>
								<th>Column header 17</th>
								<th>Column header 18</th>
								<th>Column header 19</th>
								<th>Column header 20</th>
							</tr>
							<tr selected="">
								<td>Row 1 Column 1</td>
								<td>Row 1 Column 2</td>
								<td>Row 1 Column 3 - Also really really really long</td>
								<td>Row 1 Column 4</td>
								<td>Row 1 Column 5</td>
								<td>Row 1 Column 6</td>
								<td>Row 1 Column 7</td>
								<td>Row 1 Column 8</td>
								<td>Row 1 Column 9</td>
								<td>Row 1 Column 10</td>
								<td>Row 1 Column 11</td>
								<td>Row 1 Column 12</td>
								<td>Row 1 Column 13</td>
								<td>Row 1 Column 14</td>
								<td>Row 1 Column 15</td>
								<td>Row 1 Column 16</td>
								<td>Row 1 Column 17</td>
								<td>Row 1 Column 18</td>
								<td>Row 1 Column 19</td>
								<td>Row 1 Column 20</td>
							</tr>
							<tr>
								<td>Row 2 Column 1</td>
								<td>Row 2 Column 2</td>
								<td>Row 2 Column 3</td>
								<td>Row 2 Column 4</td>
								<td>Row 2 Column 5</td>
								<td>Row 2 Column 6</td>
								<td>Row 2 Column 7</td>
								<td>Row 2 Column 8</td>
								<td>Row 2 Column 9</td>
								<td>Row 2 Column 10</td>
								<td>Row 2 Column 11</td>
								<td>Row 2 Column 12</td>
								<td>Row 2 Column 13</td>
								<td>Row 2 Column 14</td>
								<td>Row 2 Column 15</td>
								<td>Row 2 Column 16</td>
								<td>Row 2 Column 17</td>
								<td>Row 2 Column 18</td>
								<td>Row 2 Column 19</td>
								<td>Row 2 Column 20</td>
							</tr>
							<tr selected="">
								<td>Row 3 Column 1</td>
								<td>Row 3 Column 2</td>
								<td>Row 3 Column 3</td>
								<td>Row 3 Column 4</td>
								<td>Row 3 Column 5</td>
								<td>Row 3 Column 6</td>
								<td>Row 3 Column 7</td>
								<td>Row 3 Column 8</td>
								<td>Row 3 Column 9</td>
								<td>Row 3 Column 10</td>
								<td>Row 3 Column 11</td>
								<td>Row 3 Column 12</td>
								<td>Row 3 Column 13</td>
								<td>Row 3 Column 14</td>
								<td>Row 3 Column 15</td>
								<td>Row 3 Column 16</td>
								<td>Row 3 Column 17</td>
								<td>Row 3 Column 18</td>
								<td>Row 3 Column 19</td>
								<td>Row 3 Column 20</td>
							</tr>
							<tr selected="">
								<td>Row 4 Column 1</td>
								<td>Row 4 Column 2</td>
								<td>Row 4 Column 3</td>
								<td>Row 4 Column 4</td>
								<td>Row 4 Column 5</td>
								<td>Row 4 Column 6</td>
								<td>Row 4 Column 7</td>
								<td>Row 4 Column 8</td>
								<td>Row 4 Column 9</td>
								<td>Row 4 Column 10</td>
								<td>Row 4 Column 11</td>
								<td>Row 4 Column 12</td>
								<td>Row 4 Column 13</td>
								<td>Row 4 Column 14</td>
								<td>Row 4 Column 15</td>
								<td>Row 4 Column 16</td>
								<td>Row 4 Column 17</td>
								<td>Row 4 Column 18</td>
								<td>Row 4 Column 19</td>
								<td>Row 4 Column 20</td>
							</tr>
							<tr selected="">
								<td>Row 5 Column 1</td>
								<td>Row 5 Column 2</td>
								<td>Row 5 Column 3</td>
								<td>Row 5 Column 4</td>
								<td>Row 5 Column 5</td>
								<td>Row 5 Column 6</td>
								<td>Row 5 Column 7</td>
								<td>Row 5 Column 8</td>
								<td>Row 5 Column 9</td>
								<td>Row 5 Column 10</td>
								<td>Row 5 Column 11</td>
								<td>Row 5 Column 12</td>
								<td>Row 5 Column 13</td>
								<td>Row 5 Column 14</td>
								<td>Row 5 Column 15</td>
								<td>Row 5 Column 16</td>
								<td>Row 5 Column 17</td>
								<td>Row 5 Column 18</td>
								<td>Row 5 Column 19</td>
								<td>Row 5 Column 20</td>
							</tr>
							<tr>
								<td>Row 6 Column 1</td>
								<td>Row 6 Column 2</td>
								<td>Row 6 Column 3</td>
								<td>Row 6 Column 4</td>
								<td>Row 6 Column 5</td>
								<td>Row 6 Column 6</td>
								<td>Row 6 Column 7</td>
								<td>Row 6 Column 8</td>
								<td>Row 6 Column 9</td>
								<td>Row 6 Column 10</td>
								<td>Row 6 Column 11</td>
								<td>Row 6 Column 12</td>
								<td>Row 6 Column 13</td>
								<td>Row 6 Column 14</td>
								<td>Row 6 Column 15</td>
								<td>Row 6 Column 16</td>
								<td>Row 6 Column 17</td>
								<td>Row 6 Column 18</td>
								<td>Row 6 Column 19</td>
								<td>Row 6 Column 20</td>
							</tr>
							<tr>
								<td>Row 7 Column 1</td>
								<td>Row 7 Column 2</td>
								<td>Row 7 Column 3</td>
								<td>Row 7 Column 4</td>
								<td>Row 7 Column 5</td>
								<td>Row 7 Column 6</td>
								<td>Row 7 Column 7</td>
								<td>Row 7 Column 8</td>
								<td>Row 7 Column 9</td>
								<td>Row 7 Column 10</td>
								<td>Row 7 Column 11</td>
								<td>Row 7 Column 12</td>
								<td>Row 7 Column 13</td>
								<td>Row 7 Column 14</td>
								<td>Row 7 Column 15</td>
								<td>Row 7 Column 16</td>
								<td>Row 7 Column 17</td>
								<td>Row 7 Column 18</td>
								<td>Row 7 Column 19</td>
								<td>Row 7 Column 20</td>
							</tr>
							<tr>
								<td>Row 8 Column 1</td>
								<td>Row 8 Column 2</td>
								<td>Row 8 Column 3</td>
								<td>Row 8 Column 4</td>
								<td>Row 8 Column 5</td>
								<td>Row 8 Column 6</td>
								<td>Row 8 Column 7</td>
								<td>Row 8 Column 8</td>
								<td>Row 8 Column 9</td>
								<td>Row 8 Column 10</td>
								<td>Row 8 Column 11</td>
								<td>Row 8 Column 12</td>
								<td>Row 8 Column 13</td>
								<td>Row 8 Column 14</td>
								<td>Row 8 Column 15</td>
								<td>Row 8 Column 16</td>
								<td>Row 8 Column 17</td>
								<td>Row 8 Column 18</td>
								<td>Row 8 Column 19</td>
								<td>Row 8 Column 20</td>
							</tr>
							<tr>
								<td>Row 9 Column 1</td>
								<td>Row 9 Column 2</td>
								<td>Row 9 Column 3</td>
								<td>Row 9 Column 4</td>
								<td>Row 9 Column 5</td>
								<td>Row 9 Column 6</td>
								<td>Row 9 Column 7</td>
								<td>Row 9 Column 8</td>
								<td>Row 9 Column 9</td>
								<td>Row 9 Column 10</td>
								<td>Row 9 Column 11</td>
								<td>Row 9 Column 12</td>
								<td>Row 9 Column 13</td>
								<td>Row 9 Column 14</td>
								<td>Row 9 Column 15</td>
								<td>Row 9 Column 16</td>
								<td>Row 9 Column 17</td>
								<td>Row 9 Column 18</td>
								<td>Row 9 Column 19</td>
								<td>Row 9 Column 20</td>
							</tr>
							<tr>
								<td>Row 10 Column 1</td>
								<td>Row 10 Column 2</td>
								<td>Row 10 Column 3</td>
								<td>Row 10 Column 4</td>
								<td>Row 10 Column 5</td>
								<td>Row 10 Column 6</td>
								<td>Row 10 Column 7</td>
								<td>Row 10 Column 8</td>
								<td>Row 10 Column 9</td>
								<td>Row 10 Column 10</td>
								<td>Row 10 Column 11</td>
								<td>Row 10 Column 12</td>
								<td>Row 10 Column 13</td>
								<td>Row 10 Column 14</td>
								<td>Row 10 Column 15</td>
								<td>Row 10 Column 16</td>
								<td>Row 10 Column 17</td>
								<td>Row 10 Column 18</td>
								<td>Row 10 Column 19</td>
								<td>Row 10 Column 20</td>
							</tr>
							<tr>
								<td>Row 11 Column 1</td>
								<td>Row 11 Column 2</td>
								<td>Row 11 Column 3</td>
								<td>Row 11 Column 4</td>
								<td>Row 11 Column 5</td>
								<td>Row 11 Column 6</td>
								<td>Row 11 Column 7</td>
								<td>Row 11 Column 8</td>
								<td>Row 11 Column 9</td>
								<td>Row 11 Column 10</td>
								<td>Row 11 Column 11</td>
								<td>Row 11 Column 12</td>
								<td>Row 11 Column 13</td>
								<td>Row 11 Column 14</td>
								<td>Row 11 Column 15</td>
								<td>Row 11 Column 16</td>
								<td>Row 11 Column 17</td>
								<td>Row 11 Column 18</td>
								<td>Row 11 Column 19</td>
								<td>Row 11 Column 20</td>
							</tr>
							<tr>
								<td>Row 12 Column 1</td>
								<td>Row 12 Column 2</td>
								<td>Row 12 Column 3</td>
								<td>Row 12 Column 4</td>
								<td>Row 12 Column 5</td>
								<td>Row 12 Column 6</td>
								<td>Row 12 Column 7</td>
								<td>Row 12 Column 8</td>
								<td>Row 12 Column 9</td>
								<td>Row 12 Column 10</td>
								<td>Row 12 Column 11</td>
								<td>Row 12 Column 12</td>
								<td>Row 12 Column 13</td>
								<td>Row 12 Column 14</td>
								<td>Row 12 Column 15</td>
								<td>Row 12 Column 16</td>
								<td>Row 12 Column 17</td>
								<td>Row 12 Column 18</td>
								<td>Row 12 Column 19</td>
								<td>Row 12 Column 20</td>
							</tr>
							<tr>
								<td>Row 13 Column 1</td>
								<td>Row 13 Column 2</td>
								<td>Row 13 Column 3</td>
								<td>Row 13 Column 4</td>
								<td>Row 13 Column 5</td>
								<td>Row 13 Column 6</td>
								<td>Row 13 Column 7</td>
								<td>Row 13 Column 8</td>
								<td>Row 13 Column 9</td>
								<td>Row 13 Column 10</td>
								<td>Row 13 Column 11</td>
								<td>Row 13 Column 12</td>
								<td>Row 13 Column 13</td>
								<td>Row 13 Column 14</td>
								<td>Row 13 Column 15</td>
								<td>Row 13 Column 16</td>
								<td>Row 13 Column 17</td>
								<td>Row 13 Column 18</td>
								<td>Row 13 Column 19</td>
								<td>Row 13 Column 20</td>
							</tr>
							<tr>
								<td>Row 14 Column 1</td>
								<td>Row 14 Column 2</td>
								<td>Row 14 Column 3</td>
								<td>Row 14 Column 4</td>
								<td>Row 14 Column 5</td>
								<td>Row 14 Column 6</td>
								<td>Row 14 Column 7</td>
								<td>Row 14 Column 8</td>
								<td>Row 14 Column 9</td>
								<td>Row 14 Column 10</td>
								<td>Row 14 Column 11</td>
								<td>Row 14 Column 12</td>
								<td>Row 14 Column 13</td>
								<td>Row 14 Column 14</td>
								<td>Row 14 Column 15</td>
								<td>Row 14 Column 16</td>
								<td>Row 14 Column 17</td>
								<td>Row 14 Column 18</td>
								<td>Row 14 Column 19</td>
								<td>Row 14 Column 20</td>
							</tr>
							<tr selected="">
								<td>Row 15 Column 1</td>
								<td>Row 15 Column 2</td>
								<td>Row 15 Column 3</td>
								<td>Row 15 Column 4</td>
								<td>Row 15 Column 5</td>
								<td>Row 15 Column 6</td>
								<td>Row 15 Column 7</td>
								<td>Row 15 Column 8</td>
								<td>Row 15 Column 9</td>
								<td>Row 15 Column 10</td>
								<td>Row 15 Column 11</td>
								<td>Row 15 Column 12</td>
								<td>Row 15 Column 13</td>
								<td>Row 15 Column 14</td>
								<td>Row 15 Column 15</td>
								<td>Row 15 Column 16</td>
								<td>Row 15 Column 17</td>
								<td>Row 15 Column 18</td>
								<td>Row 15 Column 19</td>
								<td>Row 15 Column 20</td>
							</tr>
						</tbody>
					</table>
				</d2l-table-wrapper>

				<p>Headers and First Column</p>
				<d2l-table-wrapper sticky-headers="" type="${tableType}">
					<table class="d2l-table">
						<tbody>
							<tr header="">
								<th sticky="">Column header 1 Really Really REALLY long</th>
								<th>Column header 2</th>
								<th>Column header 3</th>
								<th>Column header 4</th>
								<th>Column header 5</th>
								<th>Column header 6</th>
								<th>Column header 7</th>
								<th>Column header 8</th>
								<th>Column header 9</th>
								<th>Column header 10</th>
								<th>Column header 11</th>
								<th>Column header 12</th>
								<th>Column header 13</th>
								<th>Column header 14</th>
								<th>Column header 15</th>
								<th>Column header 16</th>
								<th>Column header 17</th>
								<th>Column header 18</th>
								<th>Column header 19</th>
								<th>Column header 20</th>
							</tr>
							<tr selected="">
								<td sticky="">Row 1 Column 1
									<table>
										<tbody>
											<tr>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td> / </td>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td><d2l-icon icon="d2l-tier1:chevron-right" style="width:18px;height:18px;"></d2l-icon></td>
												<td><d2l-icon icon="d2l-tier1:calculate" style="width:18px;height:18px;"></d2l-icon></td>
											</tr>
										</tbody>
									</table>
								</td>
								<td>Row 1 Column 2</td>
								<td>Row 1 Column 3 - Also really really really long</td>
								<td>Row 1 Column 4</td>
								<td>Row 1 Column 5</td>
								<td>Row 1 Column 6</td>
								<td>Row 1 Column 7</td>
								<td>Row 1 Column 8</td>
								<td>Row 1 Column 9</td>
								<td>Row 1 Column 10</td>
								<td>Row 1 Column 11</td>
								<td>Row 1 Column 12</td>
								<td>Row 1 Column 13
									<table>
										<tbody>
											<tr>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td> / </td>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td><d2l-icon icon="d2l-tier1:chevron-right" style="width:18px;height:18px;"></d2l-icon></td>
												<td><d2l-icon icon="d2l-tier1:calculate" style="width:18px;height:18px;"></d2l-icon></td>
											</tr>
										</tbody>
									</table>
								</td>
								<td>Row 1 Column 14</td>
								<td>Row 1 Column 15</td>
								<td>Row 1 Column 16</td>
								<td>Row 1 Column 17</td>
								<td>Row 1 Column 18</td>
								<td>Row 1 Column 19</td>
								<td>Row 1 Column 20
									<table>
										<tbody>
											<tr>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td> / </td>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td><d2l-icon icon="d2l-tier1:chevron-right" style="width:18px;height:18px;"></d2l-icon></td>
												<td><d2l-icon icon="d2l-tier1:calculate" style="width:18px;height:18px;"></d2l-icon></td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<td sticky="">Row 2 Column 1
									<table>
										<tbody>
											<tr>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td> / </td>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td><d2l-icon icon="d2l-tier1:chevron-right" style="width:18px;height:18px;"></d2l-icon></td>
												<td><d2l-icon icon="d2l-tier1:calculate" style="width:18px;height:18px;"></d2l-icon></td>
											</tr>
										</tbody>
									</table>
								</td>
								<td>Row 2 Column 2</td>
								<td>Row 2 Column 3</td>
								<td>Row 2 Column 4</td>
								<td>Row 2 Column 5</td>
								<td>Row 2 Column 6</td>
								<td>Row 2 Column 7</td>
								<td>Row 2 Column 8</td>
								<td>Row 2 Column 9</td>
								<td>Row 2 Column 10</td>
								<td>Row 2 Column 11</td>
								<td>Row 2 Column 12</td>
								<td>Row 2 Column 13
									<table>
										<tbody>
											<tr>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td> / </td>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td><d2l-icon icon="d2l-tier1:chevron-right" style="width:18px;height:18px;"></d2l-icon></td>
												<td><d2l-icon icon="d2l-tier1:calculate" style="width:18px;height:18px;"></d2l-icon></td>
											</tr>
										</tbody>
									</table>
								</td>
								<td>Row 2 Column 14</td>
								<td>Row 2 Column 15</td>
								<td>Row 2 Column 16</td>
								<td>Row 2 Column 17</td>
								<td>Row 2 Column 18</td>
								<td>Row 2 Column 19</td>
								<td>Row 2 Column 20
									<table>
										<tbody>
											<tr>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td> / </td>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td><d2l-icon icon="d2l-tier1:chevron-right" style="width:18px;height:18px;"></d2l-icon></td>
												<td><d2l-icon icon="d2l-tier1:calculate" style="width:18px;height:18px;"></d2l-icon></td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
							<tr selected="">
								<td sticky="">Row 3 Column 1</td>
								<td>Row 3 Column 2</td>
								<td>Row 3 Column 3</td>
								<td>Row 3 Column 4</td>
								<td>Row 3 Column 5</td>
								<td>Row 3 Column 6</td>
								<td>Row 3 Column 7</td>
								<td>Row 3 Column 8</td>
								<td>Row 3 Column 9</td>
								<td>Row 3 Column 10</td>
								<td>Row 3 Column 11</td>
								<td>Row 3 Column 12</td>
								<td>Row 3 Column 13</td>
								<td>Row 3 Column 14</td>
								<td>Row 3 Column 15</td>
								<td>Row 3 Column 16</td>
								<td>Row 3 Column 17</td>
								<td>Row 3 Column 18</td>
								<td>Row 3 Column 19</td>
								<td>Row 3 Column 20</td>
							</tr>
							<tr selected="">
								<td sticky="">Row 4 Column 1</td>
								<td>Row 4 Column 2</td>
								<td>Row 4 Column 3</td>
								<td>Row 4 Column 4</td>
								<td>Row 4 Column 5</td>
								<td>Row 4 Column 6</td>
								<td>Row 4 Column 7</td>
								<td>Row 4 Column 8</td>
								<td>Row 4 Column 9</td>
								<td>Row 4 Column 10</td>
								<td>Row 4 Column 11</td>
								<td>Row 4 Column 12</td>
								<td>Row 4 Column 13</td>
								<td>Row 4 Column 14</td>
								<td>Row 4 Column 15</td>
								<td>Row 4 Column 16</td>
								<td>Row 4 Column 17</td>
								<td>Row 4 Column 18</td>
								<td>Row 4 Column 19</td>
								<td>Row 4 Column 20</td>
							</tr>
							<tr selected="">
								<td sticky="">Row 5 Column 1</td>
								<td>Row 5 Column 2</td>
								<td>Row 5 Column 3</td>
								<td>Row 5 Column 4</td>
								<td>Row 5 Column 5</td>
								<td>Row 5 Column 6</td>
								<td>Row 5 Column 7</td>
								<td>Row 5 Column 8</td>
								<td>Row 5 Column 9</td>
								<td>Row 5 Column 10</td>
								<td>Row 5 Column 11</td>
								<td>Row 5 Column 12</td>
								<td>Row 5 Column 13</td>
								<td>Row 5 Column 14</td>
								<td>Row 5 Column 15</td>
								<td>Row 5 Column 16</td>
								<td>Row 5 Column 17</td>
								<td>Row 5 Column 18</td>
								<td>Row 5 Column 19</td>
								<td>Row 5 Column 20</td>
							</tr>
							<tr>
								<td sticky="">Row 6 Column 1</td>
								<td>Row 6 Column 2</td>
								<td>Row 6 Column 3</td>
								<td>Row 6 Column 4</td>
								<td>Row 6 Column 5</td>
								<td>Row 6 Column 6</td>
								<td>Row 6 Column 7</td>
								<td>Row 6 Column 8</td>
								<td>Row 6 Column 9</td>
								<td>Row 6 Column 10</td>
								<td>Row 6 Column 11</td>
								<td>Row 6 Column 12</td>
								<td>Row 6 Column 13</td>
								<td>Row 6 Column 14</td>
								<td>Row 6 Column 15</td>
								<td>Row 6 Column 16</td>
								<td>Row 6 Column 17</td>
								<td>Row 6 Column 18</td>
								<td>Row 6 Column 19</td>
								<td>Row 6 Column 20</td>
							</tr>
							<tr>
								<td sticky="">Row 7 Column 1</td>
								<td>Row 7 Column 2</td>
								<td>Row 7 Column 3</td>
								<td>Row 7 Column 4</td>
								<td>Row 7 Column 5</td>
								<td>Row 7 Column 6</td>
								<td>Row 7 Column 7</td>
								<td>Row 7 Column 8</td>
								<td>Row 7 Column 9</td>
								<td>Row 7 Column 10</td>
								<td>Row 7 Column 11</td>
								<td>Row 7 Column 12</td>
								<td>Row 7 Column 13</td>
								<td>Row 7 Column 14</td>
								<td>Row 7 Column 15</td>
								<td>Row 7 Column 16</td>
								<td>Row 7 Column 17</td>
								<td>Row 7 Column 18</td>
								<td>Row 7 Column 19</td>
								<td>Row 7 Column 20</td>
							</tr>
							<tr>
								<td sticky="">Row 8 Column 1</td>
								<td>Row 8 Column 2</td>
								<td>Row 8 Column 3</td>
								<td>Row 8 Column 4</td>
								<td>Row 8 Column 5</td>
								<td>Row 8 Column 6</td>
								<td>Row 8 Column 7</td>
								<td>Row 8 Column 8</td>
								<td>Row 8 Column 9</td>
								<td>Row 8 Column 10</td>
								<td>Row 8 Column 11</td>
								<td>Row 8 Column 12</td>
								<td>Row 8 Column 13</td>
								<td>Row 8 Column 14</td>
								<td>Row 8 Column 15</td>
								<td>Row 8 Column 16</td>
								<td>Row 8 Column 17</td>
								<td>Row 8 Column 18</td>
								<td>Row 8 Column 19</td>
								<td>Row 8 Column 20</td>
							</tr>
							<tr>
								<td sticky="">Row 9 Column 1</td>
								<td>Row 9 Column 2</td>
								<td>Row 9 Column 3</td>
								<td>Row 9 Column 4</td>
								<td>Row 9 Column 5</td>
								<td>Row 9 Column 6</td>
								<td>Row 9 Column 7</td>
								<td>Row 9 Column 8</td>
								<td>Row 9 Column 9</td>
								<td>Row 9 Column 10</td>
								<td>Row 9 Column 11</td>
								<td>Row 9 Column 12</td>
								<td>Row 9 Column 13</td>
								<td>Row 9 Column 14</td>
								<td>Row 9 Column 15</td>
								<td>Row 9 Column 16</td>
								<td>Row 9 Column 17</td>
								<td>Row 9 Column 18</td>
								<td>Row 9 Column 19</td>
								<td>Row 9 Column 20</td>
							</tr>
							<tr>
								<td sticky="">Row 10 Column 1</td>
								<td>Row 10 Column 2</td>
								<td>Row 10 Column 3</td>
								<td>Row 10 Column 4</td>
								<td>Row 10 Column 5</td>
								<td>Row 10 Column 6</td>
								<td>Row 10 Column 7</td>
								<td>Row 10 Column 8</td>
								<td>Row 10 Column 9</td>
								<td>Row 10 Column 10</td>
								<td>Row 10 Column 11</td>
								<td>Row 10 Column 12</td>
								<td>Row 10 Column 13</td>
								<td>Row 10 Column 14</td>
								<td>Row 10 Column 15</td>
								<td>Row 10 Column 16</td>
								<td>Row 10 Column 17</td>
								<td>Row 10 Column 18</td>
								<td>Row 10 Column 19</td>
								<td>Row 10 Column 20</td>
							</tr>
							<tr>
								<td sticky="">Row 11 Column 1</td>
								<td>Row 11 Column 2</td>
								<td>Row 11 Column 3</td>
								<td>Row 11 Column 4</td>
								<td>Row 11 Column 5</td>
								<td>Row 11 Column 6</td>
								<td>Row 11 Column 7</td>
								<td>Row 11 Column 8</td>
								<td>Row 11 Column 9</td>
								<td>Row 11 Column 10</td>
								<td>Row 11 Column 11</td>
								<td>Row 11 Column 12</td>
								<td>Row 11 Column 13</td>
								<td>Row 11 Column 14</td>
								<td>Row 11 Column 15</td>
								<td>Row 11 Column 16</td>
								<td>Row 11 Column 17</td>
								<td>Row 11 Column 18</td>
								<td>Row 11 Column 19</td>
								<td>Row 11 Column 20</td>
							</tr>
							<tr>
								<td sticky="">Row 12 Column 1</td>
								<td>Row 12 Column 2</td>
								<td>Row 12 Column 3</td>
								<td>Row 12 Column 4</td>
								<td>Row 12 Column 5</td>
								<td>Row 12 Column 6</td>
								<td>Row 12 Column 7</td>
								<td>Row 12 Column 8</td>
								<td>Row 12 Column 9</td>
								<td>Row 12 Column 10</td>
								<td>Row 12 Column 11</td>
								<td>Row 12 Column 12</td>
								<td>Row 12 Column 13</td>
								<td>Row 12 Column 14</td>
								<td>Row 12 Column 15</td>
								<td>Row 12 Column 16</td>
								<td>Row 12 Column 17</td>
								<td>Row 12 Column 18</td>
								<td>Row 12 Column 19</td>
								<td>Row 12 Column 20</td>
							</tr>
							<tr>
								<td sticky="">Row 13 Column 1</td>
								<td>Row 13 Column 2</td>
								<td>Row 13 Column 3</td>
								<td>Row 13 Column 4</td>
								<td>Row 13 Column 5</td>
								<td>Row 13 Column 6</td>
								<td>Row 13 Column 7</td>
								<td>Row 13 Column 8</td>
								<td>Row 13 Column 9</td>
								<td>Row 13 Column 10</td>
								<td>Row 13 Column 11</td>
								<td>Row 13 Column 12</td>
								<td>Row 13 Column 13</td>
								<td>Row 13 Column 14</td>
								<td>Row 13 Column 15</td>
								<td>Row 13 Column 16</td>
								<td>Row 13 Column 17</td>
								<td>Row 13 Column 18</td>
								<td>Row 13 Column 19</td>
								<td>Row 13 Column 20</td>
							</tr>
							<tr>
								<td sticky="">Row 14 Column 1</td>
								<td>Row 14 Column 2</td>
								<td>Row 14 Column 3</td>
								<td>Row 14 Column 4</td>
								<td>Row 14 Column 5</td>
								<td>Row 14 Column 6</td>
								<td>Row 14 Column 7</td>
								<td>Row 14 Column 8</td>
								<td>Row 14 Column 9</td>
								<td>Row 14 Column 10</td>
								<td>Row 14 Column 11</td>
								<td>Row 14 Column 12</td>
								<td>Row 14 Column 13</td>
								<td>Row 14 Column 14</td>
								<td>Row 14 Column 15</td>
								<td>Row 14 Column 16</td>
								<td>Row 14 Column 17</td>
								<td>Row 14 Column 18</td>
								<td>Row 14 Column 19</td>
								<td>Row 14 Column 20</td>
							</tr>
							<tr selected="">
								<td sticky="">Row 15 Column 1
									<table>
										<tbody>
											<tr>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td> / </td>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td><d2l-icon icon="d2l-tier1:chevron-right" style="width:18px;height:18px;"></d2l-icon></td>
												<td><d2l-icon icon="d2l-tier1:calculate" style="width:18px;height:18px;"></d2l-icon></td>
											</tr>
										</tbody>
									</table>
								</td>
								<td>Row 15 Column 2</td>
								<td>Row 15 Column 3</td>
								<td>Row 15 Column 4</td>
								<td>Row 15 Column 5</td>
								<td>Row 15 Column 6</td>
								<td>Row 15 Column 7</td>
								<td>Row 15 Column 8</td>
								<td>Row 15 Column 9</td>
								<td>Row 15 Column 10</td>
								<td>Row 15 Column 11</td>
								<td>Row 15 Column 12</td>
								<td>Row 15 Column 13
									<table>
										<tbody>
											<tr>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td> / </td>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td><d2l-icon icon="d2l-tier1:chevron-right" style="width:18px;height:18px;"></d2l-icon></td>
												<td><d2l-icon icon="d2l-tier1:calculate" style="width:18px;height:18px;"></d2l-icon></td>
											</tr>
										</tbody>
									</table>
								</td>
								<td>Row 15 Column 14</td>
								<td>Row 15 Column 15</td>
								<td>Row 15 Column 16</td>
								<td>Row 15 Column 17</td>
								<td>Row 15 Column 18</td>
								<td>Row 15 Column 19</td>
								<td>Row 15 Column 20
									<table>
										<tbody>
											<tr>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td> / </td>
												<td><input style="width:100%;min-width:1rem;max-width:5.25rem;"></td>
												<td><d2l-icon icon="d2l-tier1:chevron-right" style="width:18px;height:18px;"></d2l-icon></td>
												<td><d2l-icon icon="d2l-tier1:calculate" style="width:18px;height:18px;"></d2l-icon></td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</d2l-table-wrapper>

				<p>Multi-Header Table</p>
				<d2l-table-wrapper sticky-headers="" type="${tableType}">
					<table id="multi" class="d2l-table">
						<thead>
							<tr>
								<th rowspan="2">Column header 1 Really Really REALLY long</th>
								<th sticky="">Column header 2</th>
								<th rowspan="2">Column header 3</th>
								<th>Column header 4</th>
								<th rowspan="2">Column header 5</th>
								<th rowspan="2">Column header 6</th>
								<th rowspan="2">Column header 7</th>
								<th rowspan="2">Column header 8</th>
								<th>Column header 9</th>
								<th rowspan="2">Column header 10</th>
								<th rowspan="2">Column header 11</th>
								<th rowspan="2">Column header 12</th>
								<th rowspan="2">Column header 13</th>
								<th rowspan="2">Column header 14</th>
								<th rowspan="2">Column header 15</th>
								<th>Column header 16</th>
								<th rowspan="2">Column header 17</th>
								<th rowspan="2">Column header 18</th>
								<th rowspan="2">Column header 19</th>
								<th rowspan="2">Column header 20</th>
							</tr>
							<tr>
								<th sticky="">Sub Header</th>
								<th>Sub Header</th>
								<th>Sub Header</th>
								<th>Sub Header</th>
							</tr>
						</thead>
						<tbody>
							<tr selected="">
								<td>Row 1 Column 1</td>
								<td sticky="">Row 1 Column 2</td>
								<td>Row 1 Column 3 - Also really really really long</td>
								<td>Row 1 Column 4</td>
								<td>Row 1 Column 5</td>
								<td>Row 1 Column 6</td>
								<td>Row 1 Column 7</td>
								<td>Row 1 Column 8</td>
								<td>Row 1 Column 9</td>
								<td>Row 1 Column 10</td>
								<td>Row 1 Column 11</td>
								<td>Row 1 Column 12</td>
								<td>Row 1 Column 13</td>
								<td>Row 1 Column 14</td>
								<td>Row 1 Column 15</td>
								<td>Row 1 Column 16</td>
								<td>Row 1 Column 17</td>
								<td>Row 1 Column 18</td>
								<td>Row 1 Column 19</td>
								<td>Row 1 Column 20</td>
							</tr>
							<tr>
								<td>Row 2 Column 1</td>
								<td sticky="">Row 2 Column 2</td>
								<td>Row 2 Column 3</td>
								<td>Row 2 Column 4</td>
								<td>Row 2 Column 5</td>
								<td>Row 2 Column 6</td>
								<td>Row 2 Column 7</td>
								<td>Row 2 Column 8</td>
								<td>Row 2 Column 9</td>
								<td>Row 2 Column 10</td>
								<td>Row 2 Column 11</td>
								<td>Row 2 Column 12</td>
								<td>Row 2 Column 13</td>
								<td>Row 2 Column 14</td>
								<td>Row 2 Column 15</td>
								<td>Row 2 Column 16</td>
								<td>Row 2 Column 17</td>
								<td>Row 2 Column 18</td>
								<td>Row 2 Column 19</td>
								<td>Row 2 Column 20</td>
							</tr>
							<tr selected="">
								<td>Row 3 Column 1</td>
								<td sticky="">Row 3 Column 2</td>
								<td>Row 3 Column 3</td>
								<td>Row 3 Column 4</td>
								<td>Row 3 Column 5</td>
								<td>Row 3 Column 6</td>
								<td>Row 3 Column 7</td>
								<td>Row 3 Column 8</td>
								<td>Row 3 Column 9</td>
								<td>Row 3 Column 10</td>
								<td>Row 3 Column 11</td>
								<td>Row 3 Column 12</td>
								<td>Row 3 Column 13</td>
								<td>Row 3 Column 14</td>
								<td>Row 3 Column 15</td>
								<td>Row 3 Column 16</td>
								<td>Row 3 Column 17</td>
								<td>Row 3 Column 18</td>
								<td>Row 3 Column 19</td>
								<td>Row 3 Column 20</td>
							</tr>
							<tr selected="">
								<td>Row 4 Column 1</td>
								<td sticky="">Row 4 Column 2</td>
								<td>Row 4 Column 3</td>
								<td>Row 4 Column 4</td>
								<td>Row 4 Column 5</td>
								<td>Row 4 Column 6</td>
								<td>Row 4 Column 7</td>
								<td>Row 4 Column 8</td>
								<td>Row 4 Column 9</td>
								<td>Row 4 Column 10</td>
								<td>Row 4 Column 11</td>
								<td>Row 4 Column 12</td>
								<td>Row 4 Column 13</td>
								<td>Row 4 Column 14</td>
								<td>Row 4 Column 15</td>
								<td>Row 4 Column 16</td>
								<td>Row 4 Column 17</td>
								<td>Row 4 Column 18</td>
								<td>Row 4 Column 19</td>
								<td>Row 4 Column 20</td>
							</tr>
							<tr selected="">
								<td>Row 5 Column 1</td>
								<td sticky="">Row 5 Column 2</td>
								<td>Row 5 Column 3</td>
								<td>Row 5 Column 4</td>
								<td>Row 5 Column 5</td>
								<td>Row 5 Column 6</td>
								<td>Row 5 Column 7</td>
								<td>Row 5 Column 8</td>
								<td>Row 5 Column 9</td>
								<td>Row 5 Column 10</td>
								<td>Row 5 Column 11</td>
								<td>Row 5 Column 12</td>
								<td>Row 5 Column 13</td>
								<td>Row 5 Column 14</td>
								<td>Row 5 Column 15</td>
								<td>Row 5 Column 16</td>
								<td>Row 5 Column 17</td>
								<td>Row 5 Column 18</td>
								<td>Row 5 Column 19</td>
								<td>Row 5 Column 20</td>
							</tr>
							<tr>
								<td>Row 6 Column 1</td>
								<td sticky="">Row 6 Column 2</td>
								<td>Row 6 Column 3</td>
								<td>Row 6 Column 4</td>
								<td>Row 6 Column 5</td>
								<td>Row 6 Column 6</td>
								<td>Row 6 Column 7</td>
								<td>Row 6 Column 8</td>
								<td>Row 6 Column 9</td>
								<td>Row 6 Column 10</td>
								<td>Row 6 Column 11</td>
								<td>Row 6 Column 12</td>
								<td>Row 6 Column 13</td>
								<td>Row 6 Column 14</td>
								<td>Row 6 Column 15</td>
								<td>Row 6 Column 16</td>
								<td>Row 6 Column 17</td>
								<td>Row 6 Column 18</td>
								<td>Row 6 Column 19</td>
								<td>Row 6 Column 20</td>
							</tr>
							<tr>
								<td>Row 7 Column 1</td>
								<td sticky="">Row 7 Column 2</td>
								<td>Row 7 Column 3</td>
								<td>Row 7 Column 4</td>
								<td>Row 7 Column 5</td>
								<td>Row 7 Column 6</td>
								<td>Row 7 Column 7</td>
								<td>Row 7 Column 8</td>
								<td>Row 7 Column 9</td>
								<td>Row 7 Column 10</td>
								<td>Row 7 Column 11</td>
								<td>Row 7 Column 12</td>
								<td>Row 7 Column 13</td>
								<td>Row 7 Column 14</td>
								<td>Row 7 Column 15</td>
								<td>Row 7 Column 16</td>
								<td>Row 7 Column 17</td>
								<td>Row 7 Column 18</td>
								<td>Row 7 Column 19</td>
								<td>Row 7 Column 20</td>
							</tr>
							<tr>
								<td>Row 8 Column 1</td>
								<td sticky="">Row 8 Column 2</td>
								<td>Row 8 Column 3</td>
								<td>Row 8 Column 4</td>
								<td>Row 8 Column 5</td>
								<td>Row 8 Column 6</td>
								<td>Row 8 Column 7</td>
								<td>Row 8 Column 8</td>
								<td>Row 8 Column 9</td>
								<td>Row 8 Column 10</td>
								<td>Row 8 Column 11</td>
								<td>Row 8 Column 12</td>
								<td>Row 8 Column 13</td>
								<td>Row 8 Column 14</td>
								<td>Row 8 Column 15</td>
								<td>Row 8 Column 16</td>
								<td>Row 8 Column 17</td>
								<td>Row 8 Column 18</td>
								<td>Row 8 Column 19</td>
								<td>Row 8 Column 20</td>
							</tr>
							<tr>
								<td>Row 9 Column 1</td>
								<td sticky="">Row 9 Column 2</td>
								<td>Row 9 Column 3</td>
								<td>Row 9 Column 4</td>
								<td>Row 9 Column 5</td>
								<td>Row 9 Column 6</td>
								<td>Row 9 Column 7</td>
								<td>Row 9 Column 8</td>
								<td>Row 9 Column 9</td>
								<td>Row 9 Column 10</td>
								<td>Row 9 Column 11</td>
								<td>Row 9 Column 12</td>
								<td>Row 9 Column 13</td>
								<td>Row 9 Column 14</td>
								<td>Row 9 Column 15</td>
								<td>Row 9 Column 16</td>
								<td>Row 9 Column 17</td>
								<td>Row 9 Column 18</td>
								<td>Row 9 Column 19</td>
								<td>Row 9 Column 20</td>
							</tr>
							<tr>
								<td>Row 10 Column 1</td>
								<td sticky="">Row 10 Column 2</td>
								<td>Row 10 Column 3</td>
								<td>Row 10 Column 4</td>
								<td>Row 10 Column 5</td>
								<td>Row 10 Column 6</td>
								<td>Row 10 Column 7</td>
								<td>Row 10 Column 8</td>
								<td>Row 10 Column 9</td>
								<td>Row 10 Column 10</td>
								<td>Row 10 Column 11</td>
								<td>Row 10 Column 12</td>
								<td>Row 10 Column 13</td>
								<td>Row 10 Column 14</td>
								<td>Row 10 Column 15</td>
								<td>Row 10 Column 16</td>
								<td>Row 10 Column 17</td>
								<td>Row 10 Column 18</td>
								<td>Row 10 Column 19</td>
								<td>Row 10 Column 20</td>
							</tr>
							<tr>
								<td>Row 11 Column 1</td>
								<td sticky="">Row 11 Column 2</td>
								<td>Row 11 Column 3</td>
								<td>Row 11 Column 4</td>
								<td>Row 11 Column 5</td>
								<td>Row 11 Column 6</td>
								<td>Row 11 Column 7</td>
								<td>Row 11 Column 8</td>
								<td>Row 11 Column 9</td>
								<td>Row 11 Column 10</td>
								<td>Row 11 Column 11</td>
								<td>Row 11 Column 12</td>
								<td>Row 11 Column 13</td>
								<td>Row 11 Column 14</td>
								<td>Row 11 Column 15</td>
								<td>Row 11 Column 16</td>
								<td>Row 11 Column 17</td>
								<td>Row 11 Column 18</td>
								<td>Row 11 Column 19</td>
								<td>Row 11 Column 20</td>
							</tr>
							<tr>
								<td>Row 12 Column 1</td>
								<td sticky="">Row 12 Column 2</td>
								<td>Row 12 Column 3</td>
								<td>Row 12 Column 4</td>
								<td>Row 12 Column 5</td>
								<td>Row 12 Column 6</td>
								<td>Row 12 Column 7</td>
								<td>Row 12 Column 8</td>
								<td>Row 12 Column 9</td>
								<td>Row 12 Column 10</td>
								<td>Row 12 Column 11</td>
								<td>Row 12 Column 12</td>
								<td>Row 12 Column 13</td>
								<td>Row 12 Column 14</td>
								<td>Row 12 Column 15</td>
								<td>Row 12 Column 16</td>
								<td>Row 12 Column 17</td>
								<td>Row 12 Column 18</td>
								<td>Row 12 Column 19</td>
								<td>Row 12 Column 20</td>
							</tr>
							<tr>
								<td>Row 13 Column 1</td>
								<td sticky="">Row 13 Column 2</td>
								<td>Row 13 Column 3</td>
								<td>Row 13 Column 4</td>
								<td>Row 13 Column 5</td>
								<td>Row 13 Column 6</td>
								<td>Row 13 Column 7</td>
								<td>Row 13 Column 8</td>
								<td>Row 13 Column 9</td>
								<td>Row 13 Column 10</td>
								<td>Row 13 Column 11</td>
								<td>Row 13 Column 12</td>
								<td>Row 13 Column 13</td>
								<td>Row 13 Column 14</td>
								<td>Row 13 Column 15</td>
								<td>Row 13 Column 16</td>
								<td>Row 13 Column 17</td>
								<td>Row 13 Column 18</td>
								<td>Row 13 Column 19</td>
								<td>Row 13 Column 20</td>
							</tr>
							<tr>
								<td>Row 14 Column 1</td>
								<td sticky="">Row 14 Column 2</td>
								<td>Row 14 Column 3</td>
								<td>Row 14 Column 4</td>
								<td>Row 14 Column 5</td>
								<td>Row 14 Column 6</td>
								<td>Row 14 Column 7</td>
								<td>Row 14 Column 8</td>
								<td>Row 14 Column 9</td>
								<td>Row 14 Column 10</td>
								<td>Row 14 Column 11</td>
								<td>Row 14 Column 12</td>
								<td>Row 14 Column 13</td>
								<td>Row 14 Column 14</td>
								<td>Row 14 Column 15</td>
								<td>Row 14 Column 16</td>
								<td>Row 14 Column 17</td>
								<td>Row 14 Column 18</td>
								<td>Row 14 Column 19</td>
								<td>Row 14 Column 20</td>
							</tr>
							<tr selected="">
								<td>Row 15 Column 1</td>
								<td sticky="">Row 15 Column 2</td>
								<td>Row 15 Column 3</td>
								<td>Row 15 Column 4</td>
								<td>Row 15 Column 5</td>
								<td>Row 15 Column 6</td>
								<td>Row 15 Column 7</td>
								<td>Row 15 Column 8</td>
								<td>Row 15 Column 9</td>
								<td>Row 15 Column 10</td>
								<td>Row 15 Column 11</td>
								<td>Row 15 Column 12</td>
								<td>Row 15 Column 13</td>
								<td>Row 15 Column 14</td>
								<td>Row 15 Column 15</td>
								<td>Row 15 Column 16</td>
								<td>Row 15 Column 17</td>
								<td>Row 15 Column 18</td>
								<td>Row 15 Column 19</td>
								<td>Row 15 Column 20</td>
							</tr>
						</tbody>
					</table>
				</d2l-table-wrapper>

				<p>Just one row</p>
				<d2l-table-wrapper sticky-headers="" type="${tableType}">
					<table class="d2l-table">
						<tbody>
							<tr>
								<td>
									One thing
								</td>
							</tr>
						</tbody>
					</table>
				</d2l-table-wrapper>

				<p>One header and one data table</p>
				<d2l-table-wrapper sticky-headers="" type="${tableType}">
					<table class="d2l-table">
						<tbody>
							<tr header="">
								<th>
									One thing
								</th>
							</tr>
							<tr>
								<td>
									One thing
								</td>
							</tr>
						</tbody>
					</table>
				</d2l-table-wrapper>
			</div>
		</template>

	</dom-module>`;

	document.head.appendChild($_documentContainer.content);
	Polymer({
		is: 'sticky-headers-demo'
	});
}