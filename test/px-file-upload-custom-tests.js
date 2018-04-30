/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

suite('Custom Automation Tests for px-file-upload', function() {
  let uploadEl;

  setup(function(done) {
    uploadEl = fixture('pxFileUpload');
    flush(()=>{
      done();
    });
  });

  test('Check that fixture  is created', function(done){
    assert.isDefined(uploadEl);
    done();
  });

  test('Check that label button exists', function(done){
    var button = uploadEl.$$('#fileButton');
    assert.isDefined(button);
    done();
  });

  test('Check that fixture has multiple property', function(done){
    var multiple = uploadEl.multiple;
    assert.isTrue(multiple);
    done();
  });

  test('Check that hidden input is really hidden', function(done){
    var input = uploadEl.$$('#fileInput');
    assert.isTrue(input.hidden);
    done();
  });

  test('Check that message is "test message"', function(done){
    var uploadEl2 = fixture('pxFileUpload2');
    var div = uploadEl2.$.dndInstructions,
        message = div.textContent.trim();
    assert.equal(message, "test message");
    done();
  });

});
